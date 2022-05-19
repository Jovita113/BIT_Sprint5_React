import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import Typography from '@mui/material/Typography';
import "./BottomNav.css";


export default function SimpleBottomNavigation() {

  return (
    <div>
      <BottomNavigation sx={{backgroundColor: 'secondary.dark'}} position = 'static'>
        <Typography variant="p" color="white" mt={2}>All rights reserved&reg;</Typography>
      </BottomNavigation>
    </div>
  );
}