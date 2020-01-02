import React  from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import 'nprogress/nprogress.css';
import { JssProvider } from "react-jss";

import theme from '../src/theme';
import '../src/assets/style.scss';


class CSApp extends App {
  // componentDidMount() {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <JssProvider>
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      </ThemeProvider>
      </JssProvider>
    );
  }
}

export default CSApp;
