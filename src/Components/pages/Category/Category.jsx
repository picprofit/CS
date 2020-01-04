import React from 'react';
import { useQuery } from 'react-apollo';
import { connect } from 'react-redux';
import Head from 'next/head';

import PostsLayout from '../../layout/PostsLayout';
import Loader from '../../layout/Loader';
import NextNProgress from '../../NextNProgress';

import { setTitle } from '../../../actions';
import categoryQuery from './categoryQuery';

const Category = ({ id, onSetTitle }) => {
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

  const { posts, categories } = data;

  // get category name
  const category = categories.edges.filter(item => {
    const { slug: categorySlug } = item.node;
    return id === categorySlug;
  });
  const pageTitle =
    (category[0] && category[0].node && category[0].node.name) ||
    'Category not found';

  // const pageTitle = 'Category';
  onSetTitle(pageTitle);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <NextNProgress />
      <PostsLayout posts={posts} />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  onSetTitle: title => dispatch(setTitle(title))
});

export default connect(null, mapDispatchToProps)(Category);
