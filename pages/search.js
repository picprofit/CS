import React from 'react';
import { compose } from 'redux';

import withRedux from '../src/lib/redux';
import withApollo from '../src/lib/apollo';

import Layout from '../src/Components/layout/Layout';
import Search from '../src/Components/pages/Search';

const SearchPage = () => {
  return (
      <Layout>
        <Search />
      </Layout>
  );
};

export default compose(withApollo, withRedux)(SearchPage);
