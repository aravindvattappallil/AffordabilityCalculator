import { House, HouseSiding } from '@mui/icons-material'
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography, styled } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
    display:"flex",
   justifyContent:"space-between"
})


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky">
      <StyledToolbar >
        <Box display={'flex'} alignItems={'center'}>

        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <House />
        </IconButton>
        <Typography variant="h6" color="inherit" sx={{display:{xs:"none",sm:"block"}}}>
          Affordability Calculator
        </Typography>
        </Box>
        <Avatar alt="avatar"></Avatar>
      </StyledToolbar>
     
    </AppBar>
  </Box>
  )
}

export default Navbar