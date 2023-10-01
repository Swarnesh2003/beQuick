import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import GavelIcon from '@mui/icons-material/Gavel';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import DownloadDoneRoundedIcon from '@mui/icons-material/DownloadDoneRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import {Link, Outlet} from "react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function samePageLinkNavigation(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 || // ignore everything but left-click
      event.metaKey ||
      event.ctrlKey ||
      event.altKey ||
      event.shiftKey
    ) {
      return false;
    }
    return true;
  }
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          // Routing libraries handle this, you can remove the onClick handle when using them.
          if (samePageLinkNavigation(event)) {
            event.preventDefault();
          }
        }}
        {...props}
      />
    );
  }
export default function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    if (
        event.type !== 'click' ||
        (event.type === 'click' && samePageLinkNavigation(event))
      ) {
        setValue(newValue);
      }
  };

  return (
    <Box sx={{height:'97vh', bgcolor: 'rgb(236, 249, 255)'}}>
        <Box sx={{height:'9vh',marginBottom:0.5,boxShadow: '0px 4px 6px rgb(236, 249, 255)',bgcolor: 'white' , display:'flex', alignItems:'center'}}>
            <Box sx={{display:'flex', alignItems:'center', marginRight:2}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
            <img 
            src="..\images\logo.png"
            alt="Auction"
            style={{width:'12vw',height:'auto', marginLeft:25,marginRight:10}} />
            </Box>
            <Box sx={{marginLeft:6, display:'flex', alignItems:'center'}}>
              <Typography sx={{color:'#454545',fontSize:'115%'}} >Dashboard</Typography>
            </Box>
            </Box>

            <Box sx={{position:'absolute', right:0, marginRight:2, display:'flex', flexDirection:'row', alignItems:'center'}}>
              <Box sx={{display:'flex', alignItems:'center' , marginRight:'4vw'}}> <img 
            src="..\images\notification.png"
            alt="Auction"
            style={{width:'1.5vw',height:'auto'}} /></Box>
           
            <Box sx={{display:'flex', alignItems:'center', marginRight:2}}>
            <Avatar sx={{width:'2.5vw', height:'auto'}} alt="Remy Sharp" src="..\images\images.jfif" />
            <Typography sx={{marginLeft: 1,marginRight:0.7, fontSize:15,color:'#454545'}}>Swarnesh</Typography>
            <ArrowDropDownIcon color="primary" />
            </Box>
           </Box>
        </Box>
    <Box
      sx={{ flexGrow: 3, bgcolor: 'rgb(236, 249, 255)', display: 'flex', height: '89vh' }}
    >
      <Tabs 
        orientation="vertical"
        
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',width:'16vw',bgcolor: 'white' }}
      >
        <Tab sx={{marginTop:'3vh',textTransform: 'none'}}
          label={<div style={{display:'flex', alignItems: 'center', position:'absolute', left:'1.5vw'}}>
          
          <GavelIcon /> {/* Replace with your desired icon */}
        
        <Typography sx={{marginLeft:2, fontSize:'115%'}}>New Auction</Typography>
      </div>}
          component={Link}
          to="/auctioneer/dashboard/newauction" // Specify the target route
        />
     
      <Tab sx={{textTransform: 'none'}} label={
        <div style={{display:'flex', alignItems: 'center',  position:'absolute',left:'1.5vw'}}>
          
            <HourglassEmptyRoundedIcon /> {/* Replace with your desired icon */}
          
            <Typography sx={{marginLeft:2, fontSize:'115%'}}>Ongoing Auction</Typography>
        </div>
      }
      component={Link}
      to="/auctioneer/dashboard/ongoingauction"  />
      <Tab sx={{textTransform: 'none'}} label={
        <div style={{display:'flex', alignItems: 'center', position:'absolute',left:'1.5vw'}}>
          
            < DownloadDoneRoundedIcon /> {/* Replace with your desired icon */}
          
            <Typography sx={{marginLeft:2, fontSize:'115%'}}>Closed Auctions</Typography>
        </div>
      }       component={Link}
      to="/auctioneer/dashboard/closedauction"  />
        
        
        <LinkTab  sx={{textTransform: 'none'}}label={
        <div style={{display:'flex',alignItems: 'center', position:'absolute', left:'1.5vw'}}>
          
            < AccountBalanceRoundedIcon /> {/* Replace with your desired icon */}
          
            <Typography sx={{marginLeft:2, fontSize:'115%'}}>Transactions</Typography>
        </div>
      } href='/auctioneer/dashboard/Transaction'/>
      </Tabs>
      <Box sx={{ width:'80vw', m:2}}><Outlet /></Box>
     
    </Box>
    </Box>
  );
}