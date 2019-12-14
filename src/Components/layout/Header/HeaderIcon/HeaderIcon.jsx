import React, { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';

import iconsList from './iconsList';

const HeaderIcon = () => {
  const [title, setTitle] = useState('Hello');
  const [count, setCount] = useState(0);
  const TagName = iconsList[Math.floor(Math.random() * iconsList.length)];

  return (
    <Tooltip
      title={title}
      onClick={() => {
        setCount(count + 1);
        if (count > 10) {
          setTitle(`Hello! You clicked ${count} times. Why?`);
        }
      }}
    >
      <IconButton color="inherit">
        {count === 0 ? <HelpIcon /> : <TagName />}
      </IconButton>
    </Tooltip>
  );
};

export default HeaderIcon;
