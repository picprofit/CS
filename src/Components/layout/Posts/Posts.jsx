import React from 'react';
import { connect } from 'react-redux';
import { useQuery } from 'react-apollo';
import Head from 'next/head';
import NProgress from 'nprogress';

import Loader from '../Loader';
import PostsLayout from '../PostsLayout';

import { setTitle } from '../../../actions';
import getPostsQuery from './getPostsQuery';

const Posts = ({ onSetTitle }) => {
  onSetTitle('Posts');
  NProgress.start();

  const { loading, error, data } = useQuery(getPostsQuery);

  if (loading) {
    return <Loader />;
  }

  NProgress.done();
  if (error) {
    return <>Oops, smth went wrong!</>;
  }
  const { posts } = data;

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <PostsLayout posts={posts} />
    </>
  );
};
const mapDispatchToProps = dispatch => ({
  onSetTitle: title => dispatch(setTitle(title))
});

export default connect(null, mapDispatchToProps)(Posts);
