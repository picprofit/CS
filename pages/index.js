import React from 'react';
import Link from 'next/link';
import { compose } from 'redux';
import withRedux from '../src/lib/redux';
import withApollo from '../src/lib/apollo';
import Layout from '../src/Components/layout/Layout';

const Index = () => {
  return (
    <Layout>
      Hello world?
      <Link href="/test">
        <a>go to test</a>
      </Link>
    </Layout>
  );
};

Index.getInitialProps = ({ reduxStore }) => {
  return {};
};

export default compose(withApollo, withRedux)(Index);
