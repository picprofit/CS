import React from 'react';
import { useQuery } from 'react-apollo';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import getCategoriesQuery from './getCategoriesQuery';
import Loader from '../../layout/Loader';

const Categories = () => {
  const { loading, error, data } = useQuery(getCategoriesQuery);
  const { categories } = data;
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
            >
              <ListItemIcon><ArrowForwardIosIcon /></ListItemIcon>
              <ListItemText>
                {name}
              </ListItemText>
            </ListItem>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Categories;
