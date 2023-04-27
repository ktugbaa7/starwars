import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loading() {
  return (
    <Box sx={{ display: "flex", alignItems:"center",justifyContent:"center", backgroundColor: "black", height: 800}}>
          <CircularProgress sx={{color: "yellow"}}/>
    </Box>
  )
}

export default Loading