import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import axios from 'axios';
axios.defaults.withCredentials = true;

const steps = ['', ''];

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Signup() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [name, setName] = React.useState('');
    const [contact, setContact] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [city, setCity] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

  

  

  

  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  

  
    const handleReset = () => {
      setActiveStep(0);
    };
    
  const handleSubmit1 = (event) => {
    event.preventDefault();
    const data1 = new FormData(event.currentTarget);
    console.log({
      name: data1.get('name'),
      contact: data1.get('contact'),
      email: data1.get('email'),
      city: data1.get('city'),
    });
    setName(data1.get('name'))
    setContact(data1.get('contact'))
    setEmail(data1.get('email'))
    setCity(data1.get('city'))
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleSubmit2 = (event) => {
    event.preventDefault();
    const data2 = new FormData(event.currentTarget);
    var pw =  data2.get('password')
    var cpw = data2.get('cpassword')
    console.log({
      un: data2.get('username'),
      pw: data2.get('password'),
      cpw: data2.get('cpassword'),
    });
    setUsername(data2.get('username'))
    if(pw==cpw){
      setPassword(pw)
    }
    else{
      window.alert('password mismatch')
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{display: 'flex',
      flexDirection:'row',
      justifyContent:'center',
                      alignItems: 'center',
                      mt:'10vh',
                      borderRadius:'20px'
              
              }} >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={3}
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
          > <img 
          src=".\images\appviewx2.png"
          alt="Auction"
          style={{width:'80px',height:'auto', margin:5}}
  
        /></Grid>
        <Grid item xs={12} sm={7} md={4} component={Paper} sx={{ height: '80vh' ,borderTopRightRadius:'20px',
            borderBottomRightRadius:'20px',}}elevation={4} >
          <Box
            sx={{
              my: 2,
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
            
            <Typography component="h1" variant="h5" marginBottom={2}>
              Sign Up
            </Typography>
            <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Sign Up Successful
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
          <Box  sx={{ mt: 0.5, display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', }}>
                {activeStep ===0 ? (
        // JSX to render when the condition is true
        <Box component="form" noValidate onSubmit={handleSubmit1} sx={{ mt: 0.5, display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', }}>
            
            <TextField
                margin="normal"
                required
                style = {{width: '120%'}}
                id="name"
                label="name"
                name="name"
                autoComplete="name"
                autoFocus
                size="small"
              />
               <TextField
                margin="normal"
                required
                style = {{width: '120%'}}
                id="contact"
                label="contact"
                name="contact"
                autoComplete="Contact"
                size="small"
              />
              <TextField
                margin="normal"
                required
                style = {{width: '120%'}}
                id="email"
                label="email"
                name="email"
                autoComplete="email"
                size="small"
              />
                 <TextField
                margin="normal"
                required
                style = {{width: '120%'}}
                id="city"
                label="city"
                name="city"
                autoComplete="city"
                size="small"
              />
              
             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 3 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            

            
            <Button
                type="submit"
                variant="contained"
              >
                Next
              </Button>
            
          </Box>
             
        </Box>
      ) : (
        
        <Box sx={{ mt: 1, display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', }}>
             <TextField
                margin="normal"
                required
                style = {{width: '120%'}}
                id="username"
                label="Username"
                name="username"
                autoComplete="Username"
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
               <TextField
                margin="normal"
                required
                style = {{width: '120%'}}
                name="cpassword"
                label="Confirm Password"
                type="password"
                id="cpassword"
                autoComplete="confirm-password"
                size="small"
              />
              
              <Grid container sx={{  display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',pt: 2 }}>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
             
              </Box>
      )}
             
              
            </Box>
            </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 3 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            

            
            <Button
                type="submit"
                variant="contained"
              >
                Sign In
              </Button>
            
          </Box>
        </React.Fragment>
      )}
    </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}