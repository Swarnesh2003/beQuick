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

export default function Login() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
  

  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  

  
    const handleReset = () => {
      setActiveStep(0);
    };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
            
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 0.5, display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', }}>
                {activeStep ===0 ? (
        // JSX to render when the condition is true
        <Box sx={{ mt: 0.5, display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', }}>
            
            <TextField
                margin="normal"
                required
                style = {{width: '120%'}}
                id="name"
                label="Name"
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
                label="Contact"
                name="Contact"
                autoComplete="Contact"
                size="small"
              />
              <TextField
                margin="normal"
                required
                style = {{width: '120%'}}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                size="small"
              />
                 <TextField
                margin="normal"
                required
                style = {{width: '120%'}}
                id="city"
                label="City"
                name="city"
                autoComplete="city"
                size="small"
              />
             
             
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
            

            
              {activeStep === 0 ?<Button variant="contained" onClick={handleNext}>Next</Button> : <Button
                type="submit"
                variant="contained"
                onClick={handleNext}
              >
                Sign In
              </Button>}
            
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