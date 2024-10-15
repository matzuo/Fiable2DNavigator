import React, {useState} from 'react';
import NavigatorGrid from '../components/navigator-grid/navigator-grid.component';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import {centeredBoxStyles} from './main-page.style';

export default function MainPage() {
  
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Box sx={centeredBoxStyles}>
      <NavigatorGrid inputValue={inputValue}/>
      <br />
      <Grid container>
          <TextField 
              id="outlined-basic" 
              label="Enter Coordinates" 
              placeholder="e.g. 0,0 North"
              variant="outlined"
              value={inputValue}
              onChange={handleInputChange}
              />
      </Grid>
    </Box>
    
  );
}