import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Context from '../Context'

function Title() {

    const {t} = useContext(Context)
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center',  backgroundColor:'primary.light', p:5}}>
         <Typography style={{fontSize:"2.2vw"}}variant="subtitle1" gutterBottom >
        {t("MORTGAGEAFFORDABILITYCALCULATOR")}
      </Typography>
        <Typography variant="h3" style={{fontSize:"5vw"}}gutterBottom align='justify' >
        {t("howMuchYouCanAfford")}
      </Typography>

     
      <Typography variant="subtitle1" style={{fontSize:"1.7vw"}}gutterBottom align='justify' >
     {t("findDefinition")}
      </Typography>


    </Box>
  )
}

export default Title