import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
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
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={4} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
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
            
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', }}>
                {activeStep ===0 ? (
        // JSX to render when the condition is true
        <Box sx={{ mt: 1, display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', }}>
            
            <TextField
                margin="normal"
                required
                style = {{width: '160%'}}
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
               <TextField
                margin="normal"
                required
                style = {{width: '160%'}}
                id="contact"
                label="Contact"
                name="Contact"
                autoComplete="Contact"
              />
              <TextField
                margin="normal"
                required
                style = {{width: '160%'}}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
                 <TextField
                margin="normal"
                required
                style = {{width: '160%'}}
                id="city"
                label="City"
                name="city"
                autoComplete="city"
              />
             
             
        </Box>
      ) : (
        
        <Box sx={{ mt: 1, display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', }}>
             <TextField
                margin="normal"
                required
                style = {{width: '160%'}}
                id="username"
                label="Username"
                name="username"
                autoComplete="Username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                style = {{width: '160%'}}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
               <TextField
                margin="normal"
                required
                style = {{width: '160%'}}
                name="cpassword"
                label="Confirm Password"
                type="password"
                id="cpassword"
                autoComplete="confirm-password"
              />
              
              <Grid container sx={{  display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', }}>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
              </Box>
      )}
             
              
            </Box>
          
          
          
          
        
          
          
          
          
          
          
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            

            
              {activeStep === 0 ?<Button onClick={handleNext}>Next</Button> : <Button
                type="submit"
                variant="contained"
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