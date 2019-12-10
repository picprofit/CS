import React from 'react';
import { connect } from 'react-redux';
import { graphql, useQuery } from 'react-apollo';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

import getPostsQuery from './getPostsQuery';

/*
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

 */
import Loader from '../../layout/Loader';

const Search = ({ search }) => {
  const { loading, error, data } = useQuery(getPostsQuery, {
    variables: {
      search
    }
  });

  if (search.length === 0) {
    return <>Please, input something!</>;
  }

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <>Oops, smth went wrong!</>;
  }

  const { posts } = data;

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

export default connect(mapStateToProps)(Search);
