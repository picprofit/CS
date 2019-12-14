import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Categories from '../Categories';
import styles from './styles';

const Navigator = ({ classes, onDrawerToggle, ...other }) => {

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          WordPress/React
          <Hidden smUp>
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                className={classes.menuButton}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Hidden>
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/"
          className={clsx(classes.item, classes.itemCategory)}
        >
          <ListItemIcon className={classes.itemIcon}>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary
            }}
          >
            Personal cheatsheet collection
          </ListItemText>
        </ListItem>

        <ListItem
          component={Link}
          to="/categories"
          className={classes.categoryHeader}
        >
          <ListItemText
            classes={{
              primary: classes.categoryHeaderPrimary
            }}
          >
            Categories
          </ListItemText>
        </ListItem>
        <Categories classes={classes} />
        <Divider className={classes.divider} />
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigator);
