import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Newauction(){
    const [category, setCategory] = React.useState('');
    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
        },
        {
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
        },
      ];
    const handleChange = (event) => {
      setCategory(event.target.value);
    };
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          // Handle the selected file here, e.g., upload it to a server.
          console.log('Selected file:', file);
        }
      };
    return(
    <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
            <Item >
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
                            margin="normal"
                            required 
                            value={category}
                            label="Category"
                            onChange={handleChange}
                            sx={{width:'80%'}}
                            size="small"
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                                
                    <Grid item xs={12} md={6} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <TextField
                                margin="normal"
                                required   
                                id="startprice"
                                label="Starting Price Bid"
                                name="pricebid"
                
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
                                    minRows={10} // You can adjust this to set a minimum number of rows
                                    placeholder="Description"
                                    style={{ width: '98%',m:'0.1%', height:'34.5vh', resize:"none"}}/>
                    </Grid>
                </Grid>

            </Item>
        </Grid>
        
        
        <Grid item xs={12} md={5}>
        <Item >
            <Grid container  sx={{height:'80.5vh'}}>
                <Grid item xs={4}>
                        <p>Images</p>
                </Grid>
                <Grid item xs={7} alignItems="center">
                        <input
                            accept=".jpg,.jpeg,.png,.pdf"
                            style={{ display: 'none' }}
                            id="file-upload"
                            type="file"
                            onChange={handleFileUpload}
                            sx={{alignItems:"center",justifyContent:"center"}}
                        />
                        <label htmlFor="file-upload" sx={{alignItems:"center",justifyContent:"center"}}>
                            <Button
                            variant="contained"
                            component="span"
                            sx={{alignItems:"center",justifyContent:"center", height:"60%", width:"50%", fontSize:8}}
                            startIcon={<CloudUploadIcon />}
                            >
                            Upload File
                            </Button>
                            <Typography variant="body2" color="textSecondary" sx={{fontSize:8}}>
                            (JPEG, PNG, PDF supported)
                            </Typography>
                        </label>
                        </Grid>
                        <Grid item md={12} sx={{overflow:"auto", height:"70vh"}}>
                        <ImageList sx={{ width: '98%', height: "100%" }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

                        </Grid>
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
    )
}