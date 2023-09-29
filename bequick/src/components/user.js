import { Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function User(){
    const myStyle={
        backgroundColor:'white',
        height:'100vh',
        position:'absolute',
        width:'100vw',
        fontSize:'70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin:0,
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center'
    };
    
    return(
        <Box style={myStyle} >

            <Box sx={{width:'50%', display:'flex',flexDirection: 'column',alignItems: 'center',
        justifyContent:'center'
}}>    <img 
        src=".\images\auction.png"
        alt="Auction"
        style={{width:'125px',height:'auto'}}

      />
                <Typography sx={{fontSize:'20px'}}  >
                Lead auctions as an auctioneer or bid strategically  
                </Typography>
                <Typography sx={{fontSize:'20px'}}>for treasures in our lively online marketplace.</Typography>
                <Typography sx={{fontSize:'20px'}}>Explore both roles and find your passion!</Typography>
            </Box>
            <Box>
            <a href="/auctioneer"><Button sx={{m:3,height:45,width:110}}  variant="contained">Auctioneer</Button></a> 
            <a href="/bidder"><Button sx={{m:3,height:45,width:110}} variant="contained">Bidder</Button></a>
            </Box>
            
          
        </Box>
    )
}