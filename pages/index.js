import React from 'react';
import Link from 'next/link';

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

export default Index;
