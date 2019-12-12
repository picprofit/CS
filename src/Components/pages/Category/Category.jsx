import React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PostsLayout from '../../layout/PostsLayout';
import Loader from '../../layout/Loader';

import { setTitle } from '../../../actions';
import getPostsByCategoryQuery from './getPostsByCategoryQuery';

const Category = ({ data, onSetTitle }) => {
  const { loading, error, posts } = data;
  if (loading) {
    onSetTitle('Category is loading..');
    return <Loader />;
  }
  if (error) {
    onSetTitle('Failed to load category');
    return <>Oops, smth went wrong!</>;
  }
  onSetTitle('Category');
  return <PostsLayout posts={posts} />;
};

const mapDispatchToProps = dispatch => ({
  onSetTitle: title => dispatch(setTitle(title))
});

export default connect(
  null,
  mapDispatchToProps
)(
  graphql(getPostsByCategoryQuery, {
    options: props => {
      const { slug } = props.match.params;
      return {
        variables: {
          slug
        }
      };
    }
  })(Category)
);
