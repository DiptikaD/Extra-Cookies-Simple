import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import SearchAppBar from './SearchBar';
import logo from './extra-cookies.png';


const AppNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState<string | null>(null); // holding current user's name


  const handleLogin = async () => {
    try{
      const response = await fetch('http://localhost:8080/api/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if(!response.ok){
        throw new Error('Network response was not ok :(');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      setCurrentUser(username);
      console.log('Current User:', currentUser);

      // if login successful, you store the token and redirect the user

      setOpen(false);
      ////////
    } catch (error){
      console.error('There was a problem with the fetch operation :(', error);
      //handles error and displays to user
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
        <img src={logo} width={57} height={60}/>
          <Typography variant="h3" sx={{ flexGrow: 1 }}>
            Extra Cookies
          </Typography>
          <SearchAppBar/>
          {currentUser ? (
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Welcome, {currentUser}!
            </Typography>
          ) : (
            <Button color="inherit" onClick={() => setOpen(true)}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>User Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Close
          </Button>
          <Button onClick={handleLogin} color="primary">
            Log In
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AppNavbar;
