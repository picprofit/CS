import React from 'react';
import { compose } from 'redux';

import withRedux from '../src/lib/redux';
import withApollo from '../src/lib/apollo';

import Layout from '../src/Components/layout/Layout';
import Posts from '../src/Components/layout/Posts';

const Index = () => {
  return (
      <Layout>
        <Posts />
      </Layout>
  );
};

Index.getInitialProps = ({ reduxStore }) => {
  return {};
};

export default compose(withApollo, withRedux)(Index);
