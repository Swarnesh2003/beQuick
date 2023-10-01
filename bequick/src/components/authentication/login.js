import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from 'axios';
axios.defaults.withCredentials = true;





const defaultTheme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    var email= data.get('email')
    var password= data.get('password')
    axios.post('http://localhost:8000/login',
    {
        user: email,
        pass: password
    }
    ).then(function(response){
        console.log(response)
        //window.location.replace('/user')
    })
   
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      
      <Grid container component="main" sx={{display: 'flex',
      flexDirection:'row',
      justifyContent:'center',
                      alignItems: 'center',
                      mt:'10vh',
                      borderRadius:'20px'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={5}
          md={6}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '80vh',
            borderTopLeftRadius:'20px',
            borderBottomLeftRadius:'20px',
          }}
        ><img 
        src=".\images\appviewx2.png"
        alt="Auction"
        style={{width:'80px',height:'auto', margin:5}}

      /></Grid>
        <Grid item xs={10} sm={5} md={4} component={Paper} elevation={6} square sx={{ height: '80vh' ,borderTopRightRadius:'20px',
            borderBottomRightRadius:'20px',}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', }}>
              <TextField
                margin="normal"
                required
                style = {{width: '120%'}}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                size="small"
              />
              <TextField
                margin="normal"
                required
                style = {{width: '120%'}}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                size="small"
              />
         
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ width: '120%', mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container sx={{  display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', }}>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}