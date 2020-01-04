import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { List, ListItem, Divider } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import parse from 'html-react-parser';

import fixSpecialCharacters from '../../../helpers/fixSpecialCharacters';

const PostsLayout = ({ posts, skipFilter = false, filter }) => {
  let nothingFound = 'Sorry, nothing found';
  return (
    <List component="nav" aria-label="contacts">
      {posts.edges.map(item => {
        const { id, title, slug } = item.node;
        if (!title.includes(filter) && !skipFilter) {
          return null;
        }
        nothingFound = '';
        return (
          <Link href="/posts/[id]" as={`/posts/${slug}`} key={id} passHref>
            <ListItem button key={id}>
              <ArrowRightIcon />
              {/* parse special symbols but tags */}
              {parse(fixSpecialCharacters(title))}
              <Divider />
            </ListItem>
          </Link>
        );
      })}
      {nothingFound}
    </List>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

export default connect(mapStateToProps)(PostsLayout);
