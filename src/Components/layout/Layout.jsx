import React, { useState } from 'react';
import { CssBaseline, Hidden } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import 'nprogress/nprogress.css';

import Navigator from './Navigator/Navigator';
import { drawerWidth } from '../styles';
import Header from './Header';
// import Content from './Content';
// import Copyright from './Copyright';

import store from '../../store';
import theme from '../../theme';
import '../../assets/style.scss';

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Helmet from 'react-helmet';

import Posts from './pages/Posts';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Categories from './pages/Categories';
import Search from './pages/Search';

import styles  from './styles';
import { apiUrl } from '../config';
import { setTitle } from '../actions';
import Layout from './layout/Layout';

const client = new ApolloClient({
  uri: apiUrl
});


const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
        <div>
          <CssBaseline />
          <div>
            <Header
              onDrawerToggle={handleDrawerToggle}
              mobileOpen={mobileOpen}
            />
            <main>{children}</main>
          </div>
        </div>
        </ApolloProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default Layout;
