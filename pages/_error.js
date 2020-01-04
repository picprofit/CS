import React from 'react';
import { useDispatch } from 'react-redux';
import { compose } from 'redux';
import Head from 'next/head';

import Layout from '../src/Components/layout/Layout';
import { setTitle } from '../src/actions';
import withRedux from '../src/lib/redux';
import withApollo from '../src/lib/apollo';

const CSError = () => {
  const title = '404: page not found';

  const dispatch = useDispatch();
  dispatch(setTitle(title));

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <p>{title}</p>
    </Layout>
  );
};
export default compose(withApollo, withRedux)(CSError);
