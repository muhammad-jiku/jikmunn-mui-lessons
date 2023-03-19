import React, { useState } from 'react';

//  external imports
import {
  Box,
  createTheme,
  Skeleton,
  Stack,
  ThemeProvider,
} from '@mui/material';

//  internal imports
import Add from './components/Add';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Rightbar from './components/Rightbar';

function App() {
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  setTimeout(() => {
    setLoading(false);
  }, [6000]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        {loading ? (
          <Stack spacing={1}>
            <Skeleton variant="text" height={100} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="rectangular" height={300} />
          </Stack>
        ) : (
          <>
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Sidebar setMode={setMode} mode={mode} />
              <Feed />
              <Rightbar />
            </Stack>
            <Add />
          </>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
