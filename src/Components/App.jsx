import React  from 'react';
import PropTypes from 'prop-types';
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

const App = ({ classes }) => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Layout classes={classes}>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/posts/:slug" component={Post} />
            <Route path="/posts" component={Posts} />
            <Route path="/category/:slug" component={Category} />
            <Route path="/categories" component={Categories} />
            <Route path="/search" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
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
