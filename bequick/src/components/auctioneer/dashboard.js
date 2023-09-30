import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


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
    <Box>
        <Box sx={{height:'9vh',marginBottom:0.5,boxShadow: '0px 4px 6px rgb(236, 249, 255)'}}>
            <Box>
            <img 
            src="..\images\logo.png"
            alt="Auction"
            style={{width:'12vw',height:'auto', marginLeft:40,marginRight:10,marginBottom:2}} />
            </Box>
            <Box>

            </Box>
        </Box>
    <Box
      sx={{ flexGrow: 3, bgcolor: 'rgb(236, 249, 255)', display: 'flex', height: '110vh' }}
    >
      <Tabs 
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',width:'17vw',bgcolor: 'white' }}
      >
        <LinkTab label="New Auction" href='#'/>
        <LinkTab label="Ongoing Auction" href="#" />
        <LinkTab label="Closed Auction" href="#" />
        <LinkTab label="Transaction" href="#" />
      </Tabs>

    </Box>
    </Box>
  );
}