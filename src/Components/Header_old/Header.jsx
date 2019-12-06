import React, { useState } from 'react';
import { AppBar, Box, InputBase, Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';

const Header = ({ setSearchQuery: updateGlobalSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const useStyles = makeStyles(theme => {
    // console.log(theme);
    return {
      headingTitle: {
        color: theme.palette.primary.contrastText
      },
      search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto'
        }
      },
      searchIcon: {
        width: theme.spacing(7)
      },
      inputRoot: {
        color: 'inherit'
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 120,
          '&:focus': {
            width: 200
          }
        }
      }
    };
  });

  const StyledTitle = styled(Link)`
    font-size: 2rem;
    font-weight: 300;
    text-decoration: none;
  `;
  const StyledSubTitle = styled.span`
    font-size: 1.2rem;
  `;
  const StyledBox = styled(Box)`
    flex-grow: 1;
  `;
  const StyledSearch = styled.div`
    position: relative;
    margin-left: 0;
    width: 100%;
  `;
  const StyledSearchIcon = styled(SearchIcon)`
    height: 100%;
    position: absolute;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 5px;
    left: 10px;
  `;
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <StyledBox mt={3} mb={3}>
          <StyledTitle to="/" className={classes.headingTitle}>
            WordPress/React{' '}
            <StyledSubTitle>personal stylesheet collection</StyledSubTitle>
          </StyledTitle>
        </StyledBox>
        <div className={classes.search}>
          <StyledSearch className={classes.searchIcon}>
            <StyledSearchIcon />
          </StyledSearch>
          <form
            onSubmit={e => {
              e.preventDefault();
              updateGlobalSearchQuery(searchQuery);
            }}
          >
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
              }}
            />
          </form>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
