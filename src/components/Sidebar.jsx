import { Box } from '@mui/material';
import React from 'react';

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: 'none',
          sm: 'block',
        },
      }}
    >
      <h1>Sidebar</h1>
    </Box>
  );
};

export default Sidebar;
