import React from 'react';
import { connect } from 'react-redux';
import { useQuery } from 'react-apollo';

import Loader from '../../layout/Loader';
import PostsLayout from '../../layout/PostsLayout';
import { setTitle } from '../../../actions';

import getPostsQuery from './getPostsQuery';

const Posts = ({ onSetTitle }) => {
  onSetTitle('Posts');

  const { loading, error, data } = useQuery(getPostsQuery);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <>Oops, smth went wrong!</>;
  }
  const { posts } = data;

  return <PostsLayout posts={posts}/>;
};
const mapDispatchToProps = dispatch => ({
  onSetTitle: title => dispatch(setTitle(title))
});

export default connect(null, mapDispatchToProps)(Posts);
