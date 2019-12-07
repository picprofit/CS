import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Created by {' '}
      <Link color="inherit" href="https://kskonovalov.me/">
        me
      </Link>{' '}
      in 2019
    </Typography>
  );
};

export default Copyright;
