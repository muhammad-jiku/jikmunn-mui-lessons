import React from 'react';

//  internal import
import Post from './Post';

//  internal imports
import { Box } from '@mui/material';

const Feed = () => {
  return (
    <Box
      flex={4}
      p={{
        xs: 0,
        sm: 2,
      }}
    >
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
