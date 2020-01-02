import React from 'react';
import App from 'next/app';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import 'nprogress/nprogress.css';

import theme from '../src/theme';
import '../src/assets/style.scss';


class CSApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
          <Component {...pageProps} />
    );
  }
}

export default CSApp;
