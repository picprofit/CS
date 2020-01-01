import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { compose } from 'redux';

import withRedux from '../../src/lib/redux';
import withApollo from '../../src/lib/apollo';

import Layout from '../../src/Components/layout/Layout';
import Posts from '../../src/Components/layout/Posts';

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <p>Post {id}!!</p>
      <Posts />
    </Layout>
  );
};

Index.getInitialProps = ({ reduxStore }) => {
  return {};
};

export default compose(withApollo, withRedux)(Index);
