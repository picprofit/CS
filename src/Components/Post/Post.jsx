import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import parse from 'html-react-parser';

import Loader from '../Loader';

const ButtonBack = () => {
  return (
      <Link to="/">
        <Button variant="outline-primary">&larr; Back to posts</Button>
      </Link>
  );
};

const Post = props => {
  const { loading, error, post } = props.data;
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <>Oops, smth went wrong!</>;
  }

  // console.log(data);
  const { content, title } = post;
  return (
    <>
      <Typography align="left" variant="h1">
        {title}
      </Typography>
      <ButtonBack />
      <article>{parse(content)}</article>
      <ButtonBack />
    </>
  );
};

const GetPostBySlug = gql`
  query GetPostBySlug($slug: String) {
    post: postBy(uri: $slug) {
      id
      content
      title
    }
  }
`;

export default graphql(GetPostBySlug, {
  options: props => {
    const { slug } = props.match.params;
    return {
      variables: {
        slug
      }
    };
  }
})(Post);
