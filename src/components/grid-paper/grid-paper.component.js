import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import {paperStyle} from './grid-paper.styles';

const GridPaperComponent = ({id, item}) => {
  
  return (
    <Grid xs={3} key={id}>
      <Paper sx={paperStyle}>
          {item}
      </Paper>
    </Grid>
  );
}

export default GridPaperComponent;