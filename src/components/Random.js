import React, { useState, useEffect } from 'react';
import { Card, Button } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import final from '../final.jpg';
import Loader from "react-loader-spinner";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const openIcon = () => (
  <>
  Open <CheckIcon style={{ color: green[500] }}/>
</>
);

function Random() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [selection, setSelection] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let pos;
  navigator.geolocation.getCurrentPosition(position => {
    pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    const request = {
      location: pos,
      rankBy: window.google.maps.places.RankBy.DISTANCE,
      keyword: 'restaraunt'
    };
    const map = document.getElementById("map");

    let service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setData(results);
        console.log(results);
        const random = Math.floor(Math.random() * results.length);
        setSelection(results[random]);
    }
    });
    console.log(selection.name);
  });
},[]);

<div className='selection'>
  <div id="map"></div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={selection.photos ? selection.photos[0].getUrl() : final}
          title={selection.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {selection.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography>
          {selection.opening_hours && selection.opening_hours.isOpen ? openIcon()   : 'Closed'}
        </Typography>
        <Typography>
          Learn More
        </Typography>
    </CardActions>
  </Card>
</div>
  );
}

export default Random;
