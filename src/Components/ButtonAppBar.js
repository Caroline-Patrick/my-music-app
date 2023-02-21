import React,{ useState, useContext, createContext } from 'react';
import { LoginContext } from '../App';
import LogIn from './LogIn';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleClick = (e) => {
      e.preventDefault();
      setLoggedIn(!LogIn);
  };

  return (<div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button onClick={LogIn} color="inherit">
            {<LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
              {loggedIn ? (
                "Log In"
              ) : (
                "Log Out"
              )}
            </LoginContext.Provider>}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}