import React from 'react';
import Link from 'next/link';
import { compose } from 'redux';
import withRedux from '../src-ssr/lib/redux';
import withApollo from '../src-ssr/lib/apollo';

const Index = () => {
  return (
    <>
      Hello world?
      <Link href="/test">
        <a>go to test</a>
      </Link>
    </>
  );
};

Index.getInitialProps = ({ reduxStore }) => {
  return {};
};

export default compose(withApollo, withRedux)(Index);
