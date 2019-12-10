import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import getPostsQuery from './getPostsQuery';

import Loader from '../../layout/Loader';

const Search = ({ data, search }) => {
  const { loading, error, posts } = data;
  if (search.length === 0) {
    return <>Please, input something!</>;
  }
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <>Oops, smth went wrong!</>;
  }
  if (posts.edges.length === 0) {
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

const mapStateToProps = store => {
  return {
    search: store.search
  };
};

export default connect(mapStateToProps)(
  graphql(getPostsQuery, {
    options: props => {
      const { search = '' } = props;
      return {
        variables: {
          search
        }
      };
    }
  })(Search)
);
