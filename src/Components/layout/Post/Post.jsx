import React from 'react';
import { connect } from 'react-redux';
import { useQuery } from 'react-apollo';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import parse from 'html-react-parser';
import NProgress from 'nprogress';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Loader from '../Loader';
import { setTitle } from '../../../actions';
import getPostBySlugQuery from './getPostBySlugQuery';
import fixSpecialCharacters from '../../../helpers/fixSpecialCharacters';

const ButtonBack = () => {
  return (
    <Link href={'/'}>
      <Button variant="outlined">&larr; Back to posts</Button>
    </Link>
  );
};

const Post = ({ id, onSetTitle }) => {
  // NProgress.start();

  const { loading, error, data } = useQuery(getPostBySlugQuery, {
    variables: {
      slug: id
    }
  });

  if (loading) {
    onSetTitle('Post is loading..');
    return <Loader />;
  }

  if (error) {
    onSetTitle('Failed to load post');
    return <>Oops, smth went wrong!</>;
  }

  // NProgress.done();

  const { content, title } = data.post;
  const fixedTitle = parse(fixSpecialCharacters(title));
  onSetTitle(fixedTitle);
  return (
    <>
      <Head>
        <title>{fixedTitle}</title>
      </Head>
      <ButtonBack />
      <article>{parse(content.replace('wp-block-code', 'html'))}</article>
      <ButtonBack />
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  onSetTitle: title => dispatch(setTitle(title))
});

export default connect(null, mapDispatchToProps)(Post);
