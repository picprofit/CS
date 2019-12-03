import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import getCategories from '../queries/getCategories';

import Loader from '../Loader';

const Categories = ({ data }) => {
  const { loading, error, categories } = data;
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <>Oops, smth went wrong!</>;
  }
  return (
    <ul>
      {categories.edges.map(item => {
        const { id, name, slug } = item.node;
        return (
          <li key={id}>
            <Link to={`/category/${slug}`}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default graphql(getCategories, {
  options: props => {}
})(Categories);
