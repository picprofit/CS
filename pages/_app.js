import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import 'nprogress/nprogress.css';

import store from '../src-ssr/store';
import theme from '../src-ssr/theme';
import '../src-ssr/assets/style.scss';

class CSApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default CSApp;
