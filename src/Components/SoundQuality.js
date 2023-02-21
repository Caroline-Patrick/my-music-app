import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SoundQuality({ quality, setQuality }) {

  const handleChange = (event) => {
    setQuality(event.target.value);
  };

  return (
    <Card sx={{ minWidth: 300, minHeight: 200, m: 6, }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          Sound Quality
        </Typography>
        <Typography variant="body2">
          Manually control the music quality in event of poor connection.
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={quality}
              label="Quality"
              onChange={handleChange}
            >
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Normal</MenuItem>
              <MenuItem value={3}>High</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </CardActions>
    </Card>
  );
}