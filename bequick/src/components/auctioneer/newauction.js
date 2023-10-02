import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


axios.defaults.withCredentials = true;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Newauction(){
    const [category, setCategory] = React.useState('');
    const [itemData, setItemData] = useState([]);
    const [imagePreview, setImagePreview] = useState(null); // State to store the image preview
    const [open, setOpen] = React.useState(false);

  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    const handleFileInputChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        addItem(reader.result);
        setImagePreview(reader.result); // Set the image preview state
      };
  
      reader.readAsDataURL(file);
    };
  
    // Function to add a new item to the array
    const addItem = (newItem) => {
      setItemData((prevItemData) => [...prevItemData, { img: newItem, title: '' }]);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        name: data.get('name'),
        category: data.get('demo-simple-select'),
        startprice: data.get('startprice'),
        time: data.get('time'),
        reserve: data.get('reserve'),
        maxbid: data.get('maxbid'),
        desc:data.get('desc'),
        img: imagePreview
      });
      axios.post('http://localhost:8000/auctioneer/newauction',
      {
          name: data.get('name'),
        category: data.get('demo-simple-select'),
        startprice: data.get('startprice'),
        time: data.get('time'),
        reserve: data.get('reserve'),
        maxbid: data.get('maxbid'),
        desc:data.get('desc'),
        img: imagePreview
      }
      ).then(function(response){
          console.log(response)
          if(response.data.message=='true'){
            setOpen(true);
          }
          
      })
    };
  
   
    const handleChange = (event) => {
      setCategory(event.target.value);
    };

    return(
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, display: 'flex',
              flexDirection: 'column',
              alignItems: 'center', }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successfully Launched a new auction
        </Alert>
      </Snackbar>
    <Grid container spacing={2}>
       
        <Grid item xs={12} md={7}>
            <Item>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <TextField
                            margin="normal"
                            required   
                            id="name"
                            label="Item Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            sx={{width:'80%'}}
                            size="small"
                            />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <FormControl fullWidth sx={{ml:"10%", width:"100%"}}>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="demo-simple-select"
                            margin="normal"
                            required 
                            value={category}
                            label="Category"
                            onChange={handleChange}
                            sx={{width:'80%'}}
                            size="small"
                            >
                            <MenuItem value={'Car'}>Car</MenuItem>
                            <MenuItem value={'Furniture'}>Furniture</MenuItem>
                            <MenuItem value={'Electronics'}>Electronis</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                                
                    <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <TextField
                                margin="normal"
                                required   
                                id="startprice"
                                label="Starting Price Bid"
                                name="startprice"
                                sx={{width:'80%'}}
                                size="small"
                                />
                        </Grid>
                    <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <TextField
                                margin="normal"
                                required
                                id="time"
                                sx={{width:'80%'}}
                                label="End Time"
                                name="time"
                                size="small"
                                />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <TextField
                                margin="normal"
                                required
                                id="reserve"
                                sx={{width:'80%'}}
                                label="Reserve Price"
                                name="reserve"
                                size="small"
                                />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <TextField
                                margin="normal"
                                required
                                id="maxbid"
                                sx={{width:'80%'}}
                                label="Maximum Bid"
                                name="maxbid"
                                size="small"
                                />
                    </Grid>
                    </Grid>
                    
            </Item>
            <Item sx={{mt:2}}>
                <Grid container >
                    <Grid item xs={12} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        
                        
                            <TextareaAutosize
                                    aria-label="description"
                                    name="desc"
                                    id="desc"
                                    minRows={10} // You can adjust this to set a minimum number of rows
                                    placeholder="Description"
                                    style={{ width: '98%',m:'0.1%', height:'34.5vh', resize:"none"}}/>
                    </Grid>
                </Grid>

            </Item>
        </Grid>
        
        
        <Grid item xs={12} md={5}>
        <Item >
            <Grid container  sx={{height:'78vh'}}>
                <Grid item xs={4}>
                        <p>Images</p>
                </Grid>
                <Grid item xs={7} alignItems="center" sx={{height:'64vh'}}>
                <div>
                        {/* Input for file selection */}
                        <input type="file" onChange={handleFileInputChange} />

                        {/* Display the image preview */}
                        {imagePreview && (
                          <img
                            src={imagePreview}
                            alt="Uploaded Preview"
                            style={{ maxWidth: '100%', maxHeight: '200px' }}
                          />
                        )}

                        {/* Render other components or elements */}
                      </div>
                                        
                        </Grid>
                        
                        <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ width: '100%',height:"10%", mt: 3, mb: 2 }}
              >
                Launch Auction
              </Button>
                </Grid>
        </Item>
        </Grid>

   
        {/*<Grid item xs={12} md={8}>
      <div style={{ width: '95%' }}>
        <TextareaAutosize
          aria-label="description"
          minRows={4} // You can adjust this to set a minimum number of rows
          placeholder="Description"
          style={{ width: '100%' }}
        />
      </div>
    </Grid>*/}
  
    
    </Grid>
    </Box>
    )
}