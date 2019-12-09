import React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { setTitle } from '../../actions';
import getPostsByCategoryQuery from './getPostsByCategoryQuery';

import Loader from '../Loader';

const Category = ({ data, onSetTitle: setTitle }) => {
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

const mapDispatchToProps = dispatch => ({
  onSetTitle: (title) => dispatch(setTitle(title))
});

export default connect(null, mapDispatchToProps)(graphql(getPostsByCategoryQuery, {
  options: props => {
    const { slug } = props.match.params;
    return {
      variables: {
        slug
      }
    };
  }
})(Category));
