import { Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
export default function Ongoingauction(){
    return(
        <Grid container spacing={2}>
            <Grid item xs={12} md={8} lg={6} sx={{height:"30vh"}}>
                <Item ></Item>
            </Grid>
            <Grid item xs={12} md={8} lg={6}>
                <Item ></Item>
            </Grid>
            

        </Grid>
    )
}