import React, {useState} from 'react';

// MUI
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IconButton } from '@mui/material';

// Images
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from './google.svg';
import FacebookIcon from './Facebook.png';
import Image1 from './AdminLogin1.png';

// CSS
import './LogIn.css';

function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        RosterMate
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function Icons() {
  
  return (
    <Box>
      <center>
        <IconButton><img
          src= {FacebookIcon}
          alt="Google Logo"
          style={{
            width: '35px', 
            height: '35px', 
            borderRadius: '50%', 
          }}/></IconButton>
        <IconButton><AppleIcon fontSize="large"/></IconButton>
        <IconButton><img
          src= {GoogleIcon}
          alt="Google Logo"
          style={{
            width: '35px',
            height: '35px', 
            borderRadius: '50%', 
          }}/></IconButton>
      </center>
    </Box>
  );
}

const defaultTheme = createTheme();

export default function LogIn() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              ml: 10,
              mr: 10,
              mt: 5,
              mb: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
              <Typography variant="h2" style={{ fontWeight: 'bold', alignSelf: 'flex-start'}} sx={{ mb: 3 }}>
                  Login
              </Typography>
                
              <Typography variant="h4" style={{alignSelf: 'flex-start'}}>
                  Email
              </Typography>
              <input
                    type="text"
                    className="rounded-input"
                    placeholder="Email"
                    id="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />

              <Typography variant="h4" style={{alignSelf: 'flex-start'}}>
                  Password
              </Typography>
              <input
                    type='password'
                    className="rounded-input"
                    placeholder="Password"
                    id="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />

                <Grid item style={{ marginTop: '10px', alignSelf: 'flex-start'}}>
                  <Link href="#" variant="body1">
                      Forgot password?
                  </Link>
                </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                
                sx={{ mt: 3, mb: 2, padding: '12px',backgroundColor: '#1143C4',
                 color: 'white',borderRadius: '40px', 
                 '&:hover': {
                    backgroundColor: '#2555CF',
                  }, }}
                onClick={handleLogin}
              >
                Login
              </Button>
              
              <Icons/>
              
              <Copyright sx={{ mt: 5 }} />
            </Box>
            

        </Grid>

        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage:  `url(${Image1})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor:  '#ffffff',
            backgroundSize: 'auto 100%',
          }}
        />

      </Grid>
    </ThemeProvider>
  );
}