import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NetworkStatus } from 'apollo-client';
import Link from 'next/link';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import getCategoriesQuery from './getCategoriesQuery';
import Loader from '../Loader';

const Categories = ({ classes }) => {
  const { loading, error, categories, fetchMore, networkStatus } = useQuery(getCategoriesQuery);
  console.log(loading);
  console.log(error);
  console.log(categories);
  console.log(fetchMore);
  console.log(networkStatus);
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
              <a>
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
              </a>
            </ListItem>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Categories;
