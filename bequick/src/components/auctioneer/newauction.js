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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Newauction(){
    const [category, setCategory] = React.useState('');

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
        <Grid item xs={12} md={8} lg={6}>
            <Item >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
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
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
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
                                
                    <Grid item xs={12} md={6}>
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
                    <Grid item xs={12} md={6}>
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
                    <Grid item xs={12} md={6}>
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
                    <Grid item xs={12} md={6}>
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
        </Grid>
        <Grid item xs={12} md={4} lg={6} >
        <Item >
            <Grid container>
                <Grid item>
                    <p>Images</p>
                </Grid>
            </Grid>
        </Item>
        </Grid>

        <Grid item xs={12} md={8}lg={6} >
            <Item>
                <Grid container >
                <TextareaAutosize
          aria-label="description"
          minRows={10} // You can adjust this to set a minimum number of rows
          placeholder="Description"
          style={{ width: '100%',marginTop:'1.5%'}}/>
          
                </Grid>
            </Item>
        </Grid>
        <Grid item xs={12} md={8}  alignItems="center" >
        <Grid container alignItems="center">
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
          sx={{alignItems:"center",justifyContent:"center"}}
          startIcon={<CloudUploadIcon />}
        >
          Upload File
        </Button>
        <Typography variant="body2" color="textSecondary">
          (JPEG, PNG, PDF supported)
        </Typography>
      </label>
      </Grid>
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