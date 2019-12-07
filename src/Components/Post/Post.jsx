import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import parse from 'html-react-parser';

import Loader from '../Loader';
import getPostBySlug from '../queries/getPostBySlug';

const ButtonBack = () => {
  return (
      <Link to="/">
        <Button variant="outline-primary">&larr; Back to posts</Button>
      </Link>
  );
};

const Post = ({ data, setTitle }) => {
  const { loading, error, post } = data;
  if (loading) {
    setTitle('Post is loading..');
    return <Loader />;
  }
  if (error) {
    setTitle('Failed to load post');
    return <>Oops, smth went wrong!</>;
  }

  // console.log(data);
  const { content, title } = post;
  setTitle(title);
  return (
    <>
      <ButtonBack />
      <article>{parse(content)}</article>
      <ButtonBack />
    </>
  );
};

export default graphql(getPostBySlug, {
  options: props => {
    const { slug } = props.match.params;
    return {
      variables: {
        slug
      }
    };
  }
})(Post);
