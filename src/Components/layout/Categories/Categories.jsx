import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import getCategoriesQuery from './getCategoriesQuery';
import Loader from '../Loader';

const Categories = ({ classes }) => {
  const { loading, error, data } = useQuery(getCategoriesQuery);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <>Oops, smth went wrong!</>;
  }
  const { categories } = data;
  return (
    <>
      {categories.edges.map(item => {
        const { id, name, slug } = item.node;
        return (
          <React.Fragment key={id}>
            <Link href={`/categories/[id]`} as={`/categories/${slug}`}>
              <ListItem button className={classes.item}>
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
            </Link>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Categories;
