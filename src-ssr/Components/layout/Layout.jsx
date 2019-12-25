import React, { useState } from 'react';
import { CssBaseline, Hidden } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import styles, { drawerWidth } from '../styles';
import Navigator from './Navigator';
import Header from './Header';
import Content from './Content';
import Copyright from './Copyright';

const Layout = ({ classes, children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              onDrawerToggle={handleDrawerToggle}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator PaperProps={{ style: { width: drawerWidth } }} />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <Header onDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
          <main className={classes.main}>
            <Content>{children}</Content>
          </main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </>
  );
};

export default withStyles(styles)(Layout);
