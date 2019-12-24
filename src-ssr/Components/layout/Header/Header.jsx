import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import HeaderIcon from './HeaderIcon';
import styles from './styles';

const Header = ({ classes, onDrawerToggle, mobileOpen, title }) => {
  return (
    <>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Box pt={2} pb={2}>
          <Toolbar>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs>
                <Typography color="inherit" variant="h5" component="h1">
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <HeaderIcon />
              </Grid>
              <Hidden smUp>
                <Grid item>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={onDrawerToggle}
                    className={classes.menuButton}
                  >
                    {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired
};

const mapStateToProps = store => {
  return {
    title: store.title
  };
};

export default connect(mapStateToProps, null)(withStyles(styles)(Header));
