import React from 'react';
import { useSelector } from 'react-redux';
import { compose } from 'redux';
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
import withRedux from '../../../lib/redux';

const Header = ({ classes, onDrawerToggle, mobileOpen }) => {
  // TODO: fix title to SSR
  const title = useSelector(state => state.title);
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

export default compose(withStyles(styles), withRedux)(Header);
