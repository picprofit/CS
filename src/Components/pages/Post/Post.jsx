import React from 'react';
import { connect } from 'react-redux';
import { useQuery } from 'react-apollo';
import Link from 'next/link';
import { Button } from '@material-ui/core';
import parse from 'html-react-parser';
import Head from 'next/head';

import Loader from '../../layout/Loader';
import NextNProgress from '../../NextNProgress';

import { setTitle } from '../../../actions';
import getPostBySlugQuery from './getPostBySlugQuery';
import fixSpecialCharacters from '../../../helpers/fixSpecialCharacters';

const ButtonBack = () => {
  return (
    <Link href="/">
      <Button variant="outlined">&larr; Back to posts</Button>
    </Link>
  );
};

const Post = ({ id, onSetTitle }) => {
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
    const notFound = 'Post not found';
    onSetTitle(notFound);
    return (
      <>
        <Head>
          <title>{notFound}</title>
        </Head>
        <p>{notFound}</p>
      </>
    );
  }

  const { content, title } = data.post;
  const fixedTitle = parse(fixSpecialCharacters(title));
  onSetTitle(fixedTitle);
  return (
    <>
      <Head>
        <title>{fixedTitle}</title>
      </Head>
      <NextNProgress />
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
