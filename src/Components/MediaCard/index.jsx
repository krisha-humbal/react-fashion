import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({img,link,icon}) {
  return (
    <Card sx={{ width:'calc(25% - 20px)',borderRadius:'0px',overflow:'hidden' ,position:'relative'}}>
      <CardMedia
        sx={{ height: 250,'&:hover':{transform : "scale(1.1)",transition:'0.8s'},overflow:'hidden' }}
        image={img}
      />
      
      <CardActions sx={{}}>
        <Button  sx={{color:'black',textTransform:'capitalize',fontSize:'30px',fontVariant:'small-caps', "&:hover":{color:'#cb8161',backgroundColor:'none'}}}>{link}</Button>
        <Button sx={{color:'#cb8161',fontSize:'20px',fontSize:'30px'}}>{icon}</Button>
      </CardActions>
    </Card>
  );
}
