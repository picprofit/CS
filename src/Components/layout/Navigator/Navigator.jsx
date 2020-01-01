import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
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
        <ListItem button className={clsx(classes.item, classes.itemCategory)}>
          <Link href="/">
            <a>
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
            </a>
          </Link>
        </ListItem>

        <ListItem className={classes.categoryHeader}>
          <a>
            <ListItemText
              classes={{
                primary: classes.categoryHeaderPrimary
              }}
            >
              Categories
            </ListItemText>
          </a>
        </ListItem>
        <Categories classes={classes} />
        <Divider className={classes.divider} />
      </List>
    </Drawer>
  );
};

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigator);
