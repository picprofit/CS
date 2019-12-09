import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { List, ListItem, Divider } from '@material-ui/core';

import { setTitle } from '../../actions';
import getPostsQuery from './getPostsQuery';
import Loader from '../Loader';

const Posts = ({ data, onSetTitle, filter }) => {
  onSetTitle("Posts");
  const { loading, error, posts } = data;
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <>Oops, smth went wrong!</>;
  }

  return (
    <List component="nav" aria-label="contacts">
      {posts.edges.map(item => {
        const { id, title, slug } = item.node;
        if(!title.includes(filter)) {
          return null;
        }
        return (
          <ListItem component={Link} to={`/posts/${slug}`} button key={id}>
            {title}
            <Divider />
          </ListItem>
        );
      })}
    </List>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.filter
  }
};

const mapDispatchToProps = dispatch => ({
  onSetTitle: title => dispatch(setTitle(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(graphql(getPostsQuery, {
  options: () => {}
})(Posts));
