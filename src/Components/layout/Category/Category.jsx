import React from 'react';
import { graphql, useQuery } from 'react-apollo';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import Head from 'next/head';

import PostsLayout from '../PostsLayout';
import Loader from '../Loader';

import { setTitle } from '../../../actions';
import categoryQuery from './categoryQuery';

const Category = ({ id, onSetTitle }) => {
  // NProgress.start();

  const { loading, error, data } = useQuery(categoryQuery, {
    variables: {
      slug: id
    }
  });

  if (loading) {
    onSetTitle('Category is loading..');
    return <Loader />;
  }
  if (error) {
    onSetTitle('Failed to load category');
    return <>Oops, smth went wrong!</>;
  }
  // NProgress.done();

  const { posts, categories } = data;

  // get category name
  const category = categories.edges.filter(item => {
    const { slug: categorySlug } = item.node;
    return id === categorySlug;
  });
  const pageTitle = category[0].node.name || 'Category';

  // const pageTitle = 'Category';
  onSetTitle(pageTitle);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <PostsLayout posts={posts} />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  onSetTitle: title => dispatch(setTitle(title))
});

export default connect(null, mapDispatchToProps)(Category);
