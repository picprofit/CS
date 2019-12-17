import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import getCategoriesQuery from './getCategoriesQuery';
import Loader from '../Loader';

const Categories = ({ data, classes }) => {
  const { loading, error, categories } = data;
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <>Oops, smth went wrong!</>;
  }
  return (
    <>
      {categories.edges.map(item => {
        const { id, name, slug } = item.node;
        return (
          <React.Fragment key={id}>
            <ListItem
              button
              component={Link}
              to={`/category/${slug}`}
              className={classes.item}
            >
              <ListItemIcon className={classes.itemIcon}>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.itemPrimary
                }}
              >
                {name}
              </ListItemText>
            </ListItem>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default graphql(getCategoriesQuery, {
  options: props => {}
})(Categories);
