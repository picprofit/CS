import React from 'react';

const Loader = ({ alt = false }) => {
  // empty tags need for pure css loader works
  return (
    <div className={alt ? 'loader_ripple-alt' : 'loader_ripple'}>
      <div />
      <div />
    </div>
  );
};

export default Loader;
