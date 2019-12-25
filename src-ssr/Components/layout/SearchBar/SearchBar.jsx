import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router'
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

import { setFilter, setSearch } from '../../../actions';

const SearchBar = ({ classes, filter, onSetFilter, onSetSearch }) => {
  const ESC_KEY_CODE = 27;
  return (
    <AppBar
      className={classes.searchBar}
      position="static"
      color="default"
      elevation={0}
    >
      <form
        onSubmit={e => {
          e.preventDefault();
          onSetSearch(filter);
          Router.push('/search');
        }}
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
                value={filter}
                onChange={e => {
                  onSetFilter(e.target.value);
                }}
                onKeyDown={e => {
                  if (e.keyCode === ESC_KEY_CODE) {
                    onSetFilter('');
                  }
                }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.addUser}
                type="submit"
              >
                Search
              </Button>
              <Tooltip title="Clear">
                <IconButton
                  onClick={e => {
                    e.preventDefault();
                    onSetFilter('');
                  }}
                >
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </form>
    </AppBar>
  );
};

const mapStateToProps = store => {
  return {
    filter: store.filter
  };
};

const mapDispatchToProps = dispatch => ({
  onSetFilter: filter => dispatch(setFilter(filter)),
  onSetSearch: search => dispatch(setSearch(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
