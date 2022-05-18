import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import Typography from '@mui/material/Typography';


export default function SimpleBottomNavigation() {

  return (
    <Box>
      <BottomNavigation sx={{backgroundColor: 'secondary.dark'}}>
        <Typography variant="p" color="white" mt={2}>All rights reserved&reg;</Typography>
      </BottomNavigation>
    </Box>
  );
}