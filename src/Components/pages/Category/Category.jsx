import React from 'react';
import { graphql, useQuery } from 'react-apollo';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import Helmet from 'react-helmet';

import PostsLayout from '../../layout/PostsLayout';
import Loader from '../../layout/Loader';

import { setTitle } from '../../../actions';
import categoryQuery from './categoryQuery';

const Category = props => {
  NProgress.start();
  const { onSetTitle, data, match } = props;
  const { loading, error } = data;
  const { slug } = match.params;

  if (loading) {
    onSetTitle('Category is loading..');
    return <Loader />;
  }
  if (error) {
    onSetTitle('Failed to load category');
    return <>Oops, smth went wrong!</>;
  }
  NProgress.done();

  const { posts, categories } = data;

  // get category name
  const category = categories.edges.filter(item => {
    const { slug: categorySlug } = item.node;
    return slug === categorySlug;
  });
  const pageTitle = category[0].node.name || 'Category';

  // const pageTitle = 'Category';
  onSetTitle(pageTitle);
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <PostsLayout posts={posts} />
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
  graphql(categoryQuery, {
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
