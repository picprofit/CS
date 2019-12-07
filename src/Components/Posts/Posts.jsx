import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { makeStyles, List, ListItem, Divider } from '@material-ui/core';
import styled from 'styled-components';

import getPosts from '../queries/getPosts';
import Loader from '../Loader';

const Posts = ({ data, setTitle }) => {
  setTitle("Posts");
  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  }));
  const classes = useStyles();
  const StyledLink = styled(Link)`
    text-decoration: none;
  `;

  const { loading, error, posts } = data;
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <>Oops, smth went wrong!</>;
  }

  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      {posts.edges.map(item => {
        const { id, title, slug } = item.node;
        return (
          <StyledLink to={`/posts/${slug}`}>
            <ListItem button key={id}>
              {title}
              <Divider />
            </ListItem>
          </StyledLink>
        );
      })}
    </List>
  );
};

export default graphql(getPosts, {
  options: props => {}
})(Posts);
