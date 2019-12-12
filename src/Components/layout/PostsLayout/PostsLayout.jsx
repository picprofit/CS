import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, ListItem, Divider } from '@material-ui/core';

const PostsLayout = ({ posts, filter }) => {
  let nothingFoundOnFilter = 'Sorry, nothing found on filter';
  return (
    <List component="nav" aria-label="contacts">
      {posts.edges.map(item => {
        const { id, title, slug } = item.node;
        if (!title.includes(filter)) {
          return null;
        }
        nothingFoundOnFilter = '';
        return (
          <ListItem component={Link} to={`/posts/${slug}`} button key={id}>
            {title}
            <Divider />
          </ListItem>
        );
      })}
      {nothingFoundOnFilter}
    </List>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

export default connect(mapStateToProps)(PostsLayout);
