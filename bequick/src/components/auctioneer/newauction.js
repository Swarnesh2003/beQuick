import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
    return(
    <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
            <Item sx={{width:'95%'}}>
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
                            value={category}
                            label="Category"
                            onChange={handleChange}
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
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                
                                sx={{width:'80%'}}
                                size="small"
                                />
                        </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                                margin="normal"
                                required
                                id="email"
                                sx={{width:'80%'}}
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                size="small"
                                />
                    </Grid>
                    </Grid>
            </Item>
        </Grid>
        <Grid item xs={12} md={4}>
        <Item sx={{width:'95%'}}>
                <Grid container spacing={2}>
                    <p>Images</p>
                </Grid>
            </Item>
        </Grid>
        <Grid item xs={12} md={4}>
            <Item sx={{width:'95%'}}>xs=4</Item>
        </Grid>
        <Grid item xs={12} md={8}>
            <Item sx={{width:'95%'}}>xs=8</Item>
        </Grid>
    </Grid>
    )
}