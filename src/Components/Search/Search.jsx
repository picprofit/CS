import React from 'react';
import { connect } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Grid,
  TextField,
  Button,
  Tooltip,
  IconButton
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';

import { setFilter } from '../../actions';

const Search = ({ classes, onSetFilter }) => {
  return (
    <AppBar
      className={classes.searchBar}
      position="static"
      color="default"
      elevation={0}
    >
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <SearchIcon className={classes.block} color="inherit" />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              placeholder="Print here for live posts filter, or submit to search for posts"
              InputProps={{
                disableUnderline: true,
                className: classes.searchInput
              }}
              onChange={e => {
                onSetFilter(e.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.addUser}
            >
              Search
            </Button>
            <Tooltip title="Reload">
              <IconButton>
                <RefreshIcon className={classes.block} color="inherit" />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const mapDispatchToProps = dispatch => ({
  onSetFilter: filter => dispatch(setFilter(filter))
});

export default connect(null, mapDispatchToProps)(Search);
