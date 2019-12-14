import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Hidden } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Helmet from 'react-helmet';

import Navigator from './layout/Navigator';
import Content from './layout/Content';
import Header from './layout/Header';
import Copyright from './layout/Copyright';

import Posts from './pages/Posts';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Categories from './pages/Categories';
import Search from './pages/Search';

import styles from './styles';
import { apiUrl } from '../config';
import { setTitle } from '../actions';

const client = new ApolloClient({
  uri: apiUrl
});


const App = ({ classes }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div className={classes.root}>
          <CssBaseline />
          <nav className={classes.drawer}>
            <Hidden smUp implementation="js">
              <Navigator
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                onDrawerToggle={handleDrawerToggle}
              />
            </Hidden>
            <Hidden xsDown implementation="css">
              <Navigator PaperProps={{ style: { width: drawerWidth } }} />
            </Hidden>
          </nav>
          <div className={classes.app}>
            <Header onDrawerToggle={handleDrawerToggle} />
            <main className={classes.main}>
              <Content>
                <Switch>
                  <Route exact path="/" component={Posts} />
                  <Route path="/posts/:slug" component={Post} />
                  <Route path="/posts" component={Posts} />
                  <Route path="/category/:slug" component={Category} />
                  <Route path="/categories" component={Categories} />
                  <Route path="/search" component={Search} />
                  <Route component={NotFound} />
                </Switch>
              </Content>
            </main>
            <footer className={classes.footer}>
              <Copyright />
            </footer>
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
};

const mapDispatchToProps = dispatch => ({
  onSetTitle: title => dispatch(setTitle(title))
});

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(App));
