import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import { CssBaseline, Hidden } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Navigator from './Navigator';
import Content from './Content';
import Header from './Header';
import Posts from './Posts/Posts';
import Post from './Post/Post';
import Categories from './Categories/Categories';
import Category from './Category/Category';
import Search from './Search/Search';
import Copyright from './Copyright';
import theme from '../theme';

const client = new ApolloClient({
  uri: 'http://localhost/cs/backend/graphql'
});

const drawerWidth = 256;

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1'
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1'
  }
};

const App = ({ classes }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [title, setTitle] = useState('Home');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <CssBaseline />
            <nav className={classes.drawer}>
              <Hidden smUp implementation="js">
                <Navigator
                  PaperProps={{ style: { width: drawerWidth } }}
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                />
              </Hidden>
              <Hidden xsDown implementation="css">
                <Navigator PaperProps={{ style: { width: drawerWidth } }} />
              </Hidden>
            </nav>
            <div className={classes.app}>
              <Header onDrawerToggle={handleDrawerToggle} title={title} />
              <main className={classes.main}>
                <Content>
                  <Route
                    exact
                    path="/"
                    render={props => <Posts {...props} setTitle={setTitle} />}
                  />
                  <Route
                    exact
                    path="/posts/:slug"
                    render={props => <Post {...props} setTitle={setTitle} />}
                  />
                  <Route
                    exact
                    path="/categories"
                    render={props => (
                      <Categories {...props} setTitle={setTitle} />
                    )}
                  />
                  <Route
                    exact
                    path="/category/:slug"
                    render={props => (
                      <Category {...props} setTitle={setTitle} />
                    )}
                  />
                  <Route
                    exact
                    path="/search/:slug"
                    render={props => <Search {...props} setTitle={setTitle} />}
                  />
                </Content>
              </main>
              <footer className={classes.footer}>
                <Copyright />
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
