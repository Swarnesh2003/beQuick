import { Grid } from '@mui/material';
import React from 'react';
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
    const items = [
        {
          id: 1,
          title: 'Shrimp and Chorizo Paella',
          image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          subheader: 'September 14, 2016',
          content:
            'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        },
        {
            id: 2,
            title: 'Shrimp and Chorizo Paella',
            image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            subheader: 'September 14, 2016',
            content:
              'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
          },
          {
            id: 3,
            title: 'Shrimp and Chorizo Paella',
            image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            subheader: 'September 14, 2016',
            content:
              'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
          },
        // Add more items as needed
      ];
      const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return(
        <Grid container spacing={2}>
        <Grid item md={12}>
            <Item>
          <div sx={{ height: '15vh' }}>Header</div>
          </Item>
        </Grid>
        <Grid item md={12}>
          <Grid container spacing={2}>
            {items.map((item) => (
              <Grid item key={item.id} xs={12} md={3} sx={{ height: '50vh' }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: 'red[500]' }} aria-label="recipe">
                        R
                      </Avatar>
                    }
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
                    <Typography variant="body2" color="text.secondary">
                      {item.content} {/* Use dynamic content */}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <ExpandMore in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      {/* Dynamic content for expanded section */}
                    </CardContent>
                  </ExpandMore>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
        
    )
}