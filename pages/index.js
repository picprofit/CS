import React from 'react';
import Link from 'next/link';
import { compose } from 'redux';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';

import withRedux from '../src/lib/redux';
import withApollo from '../src/lib/apollo';
import theme from '../src/theme';

import Layout from '../src/Components/layout/Layout';
import Posts from '../src/Components/layout/Posts';

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
    <Layout>
      <Posts />
    </Layout>
    </ThemeProvider>
  );
};

Index.getInitialProps = ({ reduxStore }) => {
  return {};
};

export default compose(withApollo, withRedux)(Index);
