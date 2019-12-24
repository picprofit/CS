import React from 'react';
import App from 'next/app';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import 'nprogress/nprogress.css';
import { compose } from 'redux';
// import { useDispatch } from 'react-redux'

import withRedux from '../src-ssr/lib/redux';
// import withApollo from '../src-ssr/lib/apollo'

// import store from '../src-ssr/store';
import theme from '../src-ssr/theme';
import '../src-ssr/assets/style.scss';

// import apiUrl from '../src-ssr/config';
// import { setTitle } from '../src-ssr/actions';
import Layout from '../src-ssr/Components/layout/Layout';

// const client = new ApolloClient({
//   uri: apiUrl
// });

class CSApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

// export default CSApp;
export default compose(withApollo, withRedux)(CSApp);
