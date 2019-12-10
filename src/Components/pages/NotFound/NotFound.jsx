import React from 'react';
import { connect } from 'react-redux';

import { setTitle } from '../../../actions';

const NotFound = ({ onSetTitle }) => {
  onSetTitle('404');
  return <p>Nothing found!</p>;
};

const mapDispatchToProps = dispatch => ({
  onSetTitle: title => dispatch(setTitle(title))
});

export default connect(null, mapDispatchToProps)(NotFound);
