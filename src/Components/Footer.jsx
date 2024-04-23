import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
   <Box sx={{ backgroundColor: 'primary.light', display: 'flex', justifyContent: 'center', p:10 }}>

<Box sx={{width:"900px" }}>
<Typography align='justify' variant="body1" gutterBottom>
The Mortgage Affordability Calculator offers an estimation of the potential home prices
 within your budget, based on the accuracy and completeness of the data you provide. It's 
 essential to understand that these results are for illustrative purposes and should not
be considered as financial or personalized advice
      </Typography>

</Box>
   </Box>
  )
}

export default Footer