import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { compose } from 'redux';
import withRedux from '../src-ssr/lib/redux';
import withApollo from '../src-ssr/lib/apollo'

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
  // Tick the time once, so we'll have a
  // valid time before first render
  const { dispatch } = reduxStore;
  // dispatch({
  //   type: 'TICK',
  //   light: typeof window === 'object',
  //   lastUpdate: Date.now()
  // });

  return {};
};

export default compose(withApollo, withRedux)(Index)
