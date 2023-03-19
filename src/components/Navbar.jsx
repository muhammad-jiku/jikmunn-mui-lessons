import { Coffee, Mail, Notifications } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });

  const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }));

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: 'none',
              sm: 'block',
            },
          }}
        >
          MUI Lessons
        </Typography>
        <Coffee
          sx={{
            display: {
              xs: 'block',
              sm: 'none',
            },
          }}
        />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{
              width: 50,
              height: 50,
            }}
            src="https://yt3.ggpht.com/yti/AHXOFjWmFw2XVTcEBykt62yr0YjYOuGPQdBirdtSwm7wUw=s88-c-k-c0x00ffffff-no-rj-mo"
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{
              width: 40,
              height: 40,
            }}
            src="https://yt3.ggpht.com/yti/AHXOFjWmFw2XVTcEBykt62yr0YjYOuGPQdBirdtSwm7wUw=s88-c-k-c0x00ffffff-no-rj-mo"
          />
          <Typography variant="span">Jiku</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
