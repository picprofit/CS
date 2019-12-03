import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  Box,
  Container
} from '@material-ui/core';

import Posts from './Posts';
import Post from './Post';
import Categories from './Categories';
import Category from './Category';
import Search from './Search';
import Header from './Header';

const client = new ApolloClient({
  uri: 'http://localhost/cs/backend/graphql'
});

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header setSearchQuery={setSearchQuery} />
        <Box mt={14}>
          <Container>
            {searchQuery.length === 0 ? <></> : <Search query={searchQuery} />}

            <Route exact path="/" component={Posts} />
            <Route exact path="/posts/:slug" component={Post} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/category/:slug" component={Category} />
            <Route exact path="/search/:slug" component={Search} />
          </Container>
        </Box>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
