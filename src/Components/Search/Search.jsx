import React, { useState } from 'react';
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

const Search = ({ classes }) => {
  const [searchString, setSearchString] = useState('');
  return (
    <AppBar
      className={classes.searchBar}
      position="static"
      color="default"
      elevation={0}
    >
      <Toolbar>
        <p>Now we&apos;re looking for {searchString}</p>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <SearchIcon className={classes.block} color="inherit" />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              placeholder="Search here.."
              InputProps={{
                disableUnderline: true,
                className: classes.searchInput
              }}
              onChange={e => {
                setSearchString(e.target.value);
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

export default Search;
