import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { compose } from 'redux';
import { ThemeProvider } from '@material-ui/styles';

import withRedux from '../../src/lib/redux';
import withApollo from '../../src/lib/apollo';
import theme from '../../src/theme';

import Layout from '../../src/Components/layout/Layout';
import Post from '../../src/Components/layout/Post';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <ThemeProvider theme={theme}>
    <Layout>
      <Post id={id} />
    </Layout>
    </ThemeProvider>
  );
};

PostPage.getInitialProps = ({ reduxStore }) => {
  return {};
};

export default compose(withApollo, withRedux)(PostPage);
