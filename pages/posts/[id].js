import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { compose } from 'redux';

import withRedux from '../../src/lib/redux';
import withApollo from '../../src/lib/apollo';

import Layout from '../../src/Components/layout/Layout';
import Post from '../../src/Components/pages/Post';

const PostPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <Post id={id} />
    </Layout>
  );
};

export default compose(withApollo, withRedux)(PostPage);
