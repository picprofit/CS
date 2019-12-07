import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';

import Loader from '../Loader';

const ButtonBack = () => {
  return (
    <ButtonToolbar>
      <Link to="/categories/">
        <Button variant="outline-primary">&larr; Back to categories</Button>
      </Link>
    </ButtonToolbar>
  );
};

const Category = ({ data, setTitle }) => {
  const { loading, error, posts } = data;
  if (loading) {
    setTitle('Category is loading..');
    return <Loader />;
  }
  if (error) {
    setTitle('Failed to load category');
    return <>Oops, smth went wrong!</>;
  }
  setTitle('Category');
  return (
    <ul>
      {posts.edges.map(item => {
        const { id, title, slug } = item.node;
        return (
          <li key={id}>
            <Link to={`/posts/${slug}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

const GetPostsByCategory = gql`
  query GetPostsByCategory($slug: String) {
    posts(
      where: { categoryName: $slug, orderby: { field: DATE, order: ASC } }
      first: 999
    ) {
      edges {
        node {
          id
          title
          slug
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export default graphql(GetPostsByCategory, {
  options: props => {
    const { slug } = props.match.params;
    return {
      variables: {
        slug
      }
    };
  }
})(Category);
