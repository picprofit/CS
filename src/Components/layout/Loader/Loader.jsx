import React from 'react';

const Loader = ({ alt = false }) => {
  return (
    <div className={ alt ? 'loader_ripple' : 'loader_ripple-alt'}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
