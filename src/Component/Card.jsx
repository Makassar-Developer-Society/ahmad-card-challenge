import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
    height:200
  },
 }));

export default function MediaControlCard() {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={require('./../Assets/acca.jpg')} 
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Nama : Ahmad Muyassar 
          </Typography>
          <Typography component="h5" variant="h5">
            Nama : Ahmad Muyassar 
          </Typography>
          <Typography component="h5" variant="h5">
            Nama : Ahmad Muyassar 
          </Typography>
        </CardContent>
        
      </div>
      
    </Card>
  );
}