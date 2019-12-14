import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';

const HeaderIcon = () => {
  const [title, setTitle] = useState('Hello');
  const [count, setCount] = useState(0);
  return (
    <Tooltip title={title} onClick={() => {
      setCount(count + 1);
      if(count > 10) {
        setTitle(`Hello! You clicked ${count} times. Why?`)
      }
    }}>
      <IconButton color="inherit">
        <HelpIcon />
      </IconButton>
    </Tooltip>
  );
};

export default HeaderIcon;
