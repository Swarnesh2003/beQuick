import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
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
export default function Ongoingauction(){
   
      const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from your Express.js API endpoint
    axios.get('http://localhost:8000/auctioneer/ongoingauction') // Replace '/api/data' with your actual API endpoint URL
    .then((response) => {
      console.log(response.data.auction.ongoing)
      setItems(response.data.auction.ongoing); // Set the fetched data in state
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []); 
      const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return(
        <Grid container spacing={2}>
      
        <Grid item md={12}>
          <Grid container spacing={2}>
            {items.map((item) => (
              <Grid item key={item.id} xs={12} md={3} sx={{ height: '50vh' }}>
                <Card sx={{ maxWidth: 345 }}>
                                  <CardHeader
                    title={item.name} // Use dynamic title
                    subheader={`Current Bid: ${item.startprice}`} // Use dynamic subheader
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.img} // Use dynamic image source
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.desc} {/* Use dynamic content */}
                    </Typography>
                    <Button sx={{mt:3}}> Close Bid</Button>
                  </CardContent>
                 
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
        
    )
}