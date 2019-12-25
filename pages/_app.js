import React from 'react';
import App from 'next/app';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import 'nprogress/nprogress.css';

import theme from '../src-ssr/theme';
import '../src-ssr/assets/style.scss';


class CSApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default CSApp;