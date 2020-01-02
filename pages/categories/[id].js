import React from 'react';
import { useRouter } from 'next/router';
import { compose } from 'redux';

import withRedux from '../../src/lib/redux';
import withApollo from '../../src/lib/apollo';

import Layout from '../../src/Components/layout/Layout';
import Category from '../../src/Components/layout/Category';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <Category id={id} />
    </Layout>
  );
};

PostPage.getInitialProps = ({ reduxStore }) => {
  return {};
};

export default compose(withApollo, withRedux)(PostPage);
