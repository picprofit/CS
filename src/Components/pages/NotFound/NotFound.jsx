import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { setTitle } from '../../../actions';

const NotFound = ({ onSetTitle }) => {
  onSetTitle('404');
  return (
    <>
      <Helmet>
        <title>Nothing found!</title>
      </Helmet>
      <p>Nothing found!</p>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  onSetTitle: title => dispatch(setTitle(title))
});

export default connect(null, mapDispatchToProps)(NotFound);
