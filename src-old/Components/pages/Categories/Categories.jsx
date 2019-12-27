import React from 'react';
import { useQuery } from 'react-apollo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Helmet from 'react-helmet';

import Loader from '../../layout/Loader';
import getCategoriesQuery from './getCategoriesQuery';
import { setTitle } from '../../../actions';

const Categories = ({ onSetTitle }) => {
  const { loading, error, data } = useQuery(getCategoriesQuery);
  const { categories } = data;
  if (loading) {
    onSetTitle('Loading..');
    return <Loader />;
  }
  if (error) {
    onSetTitle('Category loading failed');
    return <>Oops, smth went wrong!</>;
  }
  onSetTitle('Categories');
  return (
    <>
      <Helmet>
        <title>Categories</title>
      </Helmet>
      {categories.edges.map(item => {
        const { id, name, slug } = item.node;
        return (
          <React.Fragment key={id}>
            <ListItem button component={Link} to={`/category/${slug}`}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText>{name}</ListItemText>
            </ListItem>
          </React.Fragment>
        );
      })}
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  onSetTitle: title => dispatch(setTitle(title))
});

export default connect(null, mapDispatchToProps)(Categories);
