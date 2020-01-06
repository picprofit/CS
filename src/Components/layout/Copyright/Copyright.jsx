import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Created by{' '}
      <Link href="https://kskonovalov.me/" color="inherit" target="_blank">
        K.Konovalov
      </Link>{' '}
      in 2019
    </Typography>
  );
};

export default Copyright;
