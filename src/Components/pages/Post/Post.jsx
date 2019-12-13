import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import parse from 'html-react-parser';
import NProgress from 'nprogress';
import Helmet from 'react-helmet';

import Loader from '../../layout/Loader';
import { setTitle } from '../../../actions';
import getPostBySlugQuery from './getPostBySlugQuery';

const ButtonBack = () => {
  return (
    <Button variant="outlined" component={Link} to="/">
      &larr; Back to posts
    </Button>
  );
};

const Post = ({ data, onSetTitle }) => {

  NProgress.start();
  const { loading, error, post } = data;

  if (loading) {
    onSetTitle('Post is loading..');
    return <Loader />;
  }

  if (error) {
    onSetTitle('Failed to load post');
    return <>Oops, smth went wrong!</>;
  }

  NProgress.done();

  const { content, title } = post;
  onSetTitle(title);
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ButtonBack />
      <article>{parse(content)}</article>
      <ButtonBack />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  onSetTitle: title => dispatch(setTitle(title))
});

export default connect(
  null,
  mapDispatchToProps
)(
  graphql(getPostBySlugQuery, {
    options: props => {
      const { slug } = props.match.params;
      return {
        variables: {
          slug
        }
      };
    }
  })(Post)
);
