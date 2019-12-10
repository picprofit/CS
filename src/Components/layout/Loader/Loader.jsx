import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = ({ text = 'Loading...' }) => {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">{text}</span>
    </Spinner>
  );
};

export default Loader;
