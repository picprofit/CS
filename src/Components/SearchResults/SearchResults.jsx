import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import Loader from '../Loader';

const SearchResults = props => {
  const { loading, error, posts } = props.data;
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <>Oops, smth went wrong!</>;
  }
  if(posts.edges.length === 0) {
    return <>Sorry, nothing found :( </>;
  }
  return (
    <ul>
      {posts.edges.map(item => {
        const { id, title, slug, content } = item.node;
        return (
          <li key={id}>
            <Link to={`/posts/${slug}`}>{title}</Link>
            {parse(content)}
          </li>
        );
      })}
    </ul>
  );
};

const GetPosts = gql`
  query GetPosts($searchQuery: String) {
    posts(first: 999, where: {search: $searchQuery, orderby: {field: DATE, order: ASC}}) {
      edges {
        node {
          id
          title
          slug
          content
        }
      }
    }
  }
`;

export default graphql(GetPosts, {
  options: props => {
    const { query } = props;
    const searchQuery = query || props.match.params.slug;
    return {
      variables: {
        searchQuery
      }
    };
  }
})(SearchResults);
