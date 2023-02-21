import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export default function MasterVolume({ value, setVolume }) {
  
  const handleChange = (event, newValue) => {
    setVolume(newValue);
  };

  return (
    <Card sx={{ minWidth: 300, minHeight: 200, m: 6, }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          Master Volume
        </Typography>
        <Typography variant="body2">
          Overrides all other sound settings in this application.
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ width: 200 }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <VolumeDown />
            <Slider aria-label="Volume" value={value} onChange={handleChange} />
            <VolumeUp />
          </Stack>
        </Box>
      </CardActions>
    </Card>
  );
}