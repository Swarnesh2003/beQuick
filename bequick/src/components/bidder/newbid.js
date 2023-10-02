import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  function TimerCard({ endTime }) {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  
    useEffect(() => {
      const timerInterval = setInterval(() => {
        const newTimeRemaining = calculateTimeRemaining();
        if (newTimeRemaining.total <= 0) {
          clearInterval(timerInterval);
          // Auction has ended, you can trigger the auction end action here
        } else {
          setTimeRemaining(newTimeRemaining);
        }
      }, 1000); // Update the timer every second
  
      return () => clearInterval(timerInterval); // Cleanup the timer on unmount
    }, []);
  
    function calculateTimeRemaining() {
      const now = new Date().getTime();
      const auctionEndTime = new Date(endTime).getTime();
      const totalMilliseconds = auctionEndTime - now;
  
      if (totalMilliseconds <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
      }
  
      const days = Math.floor(totalMilliseconds / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (totalMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((totalMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((totalMilliseconds % (1000 * 60)) / 1000);
  
      return { days, hours, minutes, seconds, total: totalMilliseconds };
    }
  
    return (
      <div>
        <p>
          Time Remaining: {timeRemaining.days} days, {timeRemaining.hours}:
          {String(timeRemaining.minutes).padStart(2, '0')}:
          {String(timeRemaining.seconds).padStart(2, '0')}
        </p>
      </div>
    );
  }
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

export default function Newbid(){
    const items = [
        {
          id: 1,
          title: 'Material Name ',
          image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          subheader: 'Bids:2',
          content1:
          'CurrentBid:Rs.55000',
          content2:
          'Ends in time',
        },
        {
            id: 2,
            title: 'Material Name ',
            image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            subheader: 'Bids:3',
            content1:
            'CurrentBid:Rs.55000',
            content2:
            'Ends in time',
          },
          {
            id: 3,
            title: 'Material name ',
            image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            subheader: 'Bids:54',
            content1:
               'CurrentBid:Rs.55000',
            content2:
                'Ends in time',
          },
        // Add more items as needed
      ];
      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
    

    return(
        <Grid container spacing={2}>
        <Grid item md={12}>
            <Item>
          <Grid item >
          <TextField
               
                label="Search"
                variant="outlined"
                fullWidth
                //value={searchText}
                //onChange={handleSearchChange}
                InputProps={{
        startAdornment: (
          <InputAdornment position="start">
             <SearchRoundedIcon />
          </InputAdornment>
        ),
      }}
                />
          </Grid>
          </Item>
        </Grid>
        <Grid item md={12}>
          <Grid container spacing={2}>
            {items.map((item) => (
              <Grid item key={item.id} xs={12} md={3} sx={{ height: '50vh' }}>
                 <Button  onClick={handleClickOpen}>
                 <Card sx={{ maxWidth: 345 }}>
                  <CardHeader sx={{textTransform:"none"}}
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={item.title} // Use dynamic title
                    subheader={item.subheader} // Use dynamic subheader
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.image} // Use dynamic image source
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="h6" color="text.secondary" sx={{textTransform:"none"}}>
                      {item.content1} {/* Use dynamic content */}
                    </Typography>
                    <br></br>
                    <Typography variant="h6" color="text.secondary"sx={{textTransform:"none"}}>
                      {item.content2} {/* Use dynamic content */}
                    </Typography>
                    <Typography variant="h6" component="div" sx={{textTransform:"none"}}>
                   
                   <TimerCard endTime="2023-10-02T23:59:59.999Z" />

                   </Typography>
                  </CardContent>
        
                  
                </Card>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Auction
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Item Name:xxx
          </Typography>
          <Typography gutterBottom>
            Category:xxx
          </Typography>
          <Typography gutterBottom>
            Starting Price Bid:xxx
          </Typography>
          <Typography gutterBottom>
            Reserve Price:xxx
          </Typography>
          <Typography gutterBottom>
            Maximum Bid:xxx
          </Typography>
          <Typography gutterBottom>
            Current Bid:xxx
          </Typography>
          <TextField
                                margin="normal"
                                required   
                                id="startprice"
                                label="Bid price"
                                name="pricebid"
                
                                sx={{width:'80%'}}
                                size="small"
                                />
          <FormControlLabel
          control={          <Checkbox
            // checked={isChecked}
            // onChange={handleCheckboxChange}
           
             color="primary"
           />}
           label="Add to my auctions"/>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Bid
          </Button>
        </DialogActions>
      </BootstrapDialog>              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    
    )
}