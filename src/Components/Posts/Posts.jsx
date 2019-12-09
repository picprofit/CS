import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { List, ListItem, Divider } from '@material-ui/core';

import getPostsQuery from './getPostsQuery';
import Loader from '../Loader';

const Posts = ({ data, setTitle, filter = '' }) => {
  setTitle('Posts');

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

export default graphql(getPostsQuery, {
  options: () => {}
})(Posts);
