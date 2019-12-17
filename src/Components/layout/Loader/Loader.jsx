import React from 'react';

const Loader = ({ alt = false }) => {
  return (
    <div className={alt ? 'loader_ripple-alt' : 'loader_ripple'}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
