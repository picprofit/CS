import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import SearchBar from '../SearchBar';
import styles from './styles';

const Content = ({ classes, children }) => {
  return (
    <Paper className={classes.paper}>
      <SearchBar classes={classes} />
      <div className={classes.contentWrapper}>{children}</div>
    </Paper>
  );
};

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
