import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function OnlineMode({online, setOnline}) {

  const handleChange = () => {
    setOnline(!online)
  };

  return (
    <Card sx={{ minWidth: 300, minHeight: 200, m: 6, }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          Online Mode
        </Typography>
        <Typography variant="body2">
          Is this application connected to the Internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch {...label} checked={online} onChange={handleChange}/>
      </CardActions>
    </Card>
  );
}