import React from 'react';
import { connect } from 'react-redux';
import { useQuery } from 'react-apollo';
import { Link } from 'react-router-dom';

import { setTitle } from '../../../actions';

import getPostsQuery from './getPostsQuery';

import Loader from '../../layout/Loader';

const Search = ({ search, onSetTitle }) => {
  const { loading, error, data } = useQuery(getPostsQuery, {
    skip: search.length === 0,
    variables: {
      search
    }
  });

  if (search.length === 0) {
    onSetTitle('Search');
    return <>Please, input something!</>;
  }

  if (loading) {
    onSetTitle('Search results are loading..');
    return <Loader />;
  }
  if (error) {
    onSetTitle('Search');
    return <>Oops, smth went wrong!</>;
  }

  const { posts } = data;

  if (posts.edges.length === 0) {
    onSetTitle('Search found nothing');
    return <>Sorry, nothing found :( </>;
  }
  onSetTitle(`Search results of '${search}'`);
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

const mapStateToProps = store => {
  return {
    search: store.search
  };
};

const mapDispatchToProps = dispatch => ({
  onSetTitle: title => dispatch(setTitle(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
