import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Stack, width } from "@mui/system";
import React, { useContext, useState } from "react";
import Result from "./Result";
import Context from '../Context'

const Province = [
  {
    value: 'NL',
    
  },
  {
    value: 'PE',
    
  },
  {
    value: 'NS',
    
  },
  {
    value: 'NB',
    
  },
  {
    value: 'QC',
    
  },
  {
    value: 'ON',
    
  },
  {
    value: 'MB',
    
  },
  {
    value: 'SK',
    
  },
  {
    value: 'AB',
    
  },
  {
    value: 'BC',
    
  },
  {
    value: 'YT',
    
  },
  {
    value: 'NT',
    
  },
  {
    value: 'NU',
    
  },
];

function MainContent() {
  const {t} = useContext(Context)
  const [result,setResult]= useState(false)
  const handleonResultClick =()=>{
    setResult(!result)
  }
  return (
    <Box > 
    <Box   display="flex" justifyContent="center" sx={{ m:"auto" ,mt:5}}>
      <Box>
        <Grid container spacing={{sm:0, md:3}}>
          <Grid item sm={12} md={6}>
            <Box sx={{m:2}}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                
                {t("Provinceorterritoryofresidence")}
              </Typography>
              <TextField
                sx={{ width: "325px", color:'red' }}
                variant="outlined"
                id="outlined-select-currency"
                select
               
          defaultValue="EUR"
              >
                 {Province.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
              </TextField>
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{m:2}}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              {t("Downpayment")}
              </Typography>
              <TextField
                sx={{ width: "325px" }}
                id="outlined-basic2"
                type="number"
                variant="outlined"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={{sm:0, md:3}}>
          <Grid item sm={12} md={6}>
            <Box sx={{m:2}}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
             {t("Totalgrossannualhouseholdincome")}
              </Typography>
              <TextField
                sx={{ width: "325px" }}
                id="outlined-basic3"
                type="number"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{m:2}}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                {t("Loansandotherdebts")}


              </Typography>
              <TextField
                sx={{ width: "325px" }}
                id="outlined-basic4"
                type="number"
                variant="outlined"
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={{sm:0, md:3}}>
          <Grid item sm={12} md={6}>
            <Box sx={{m:2}}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                {t("Creditcardsandlinesofcredit")}
              </Typography>
              <TextField
                sx={{ width: "325px" }}
                id="outlined-basic5"
                type="number"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{m:2}}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                {t('Monthlycondofees')}
              </Typography>
              <TextField
                sx={{ width: "325px" }}
                id="outlined-basic6"
                type="number"
                variant="outlined"
              />
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center" sx={{ my: 5 }}>
          <Button onClick={handleonResultClick} variant="contained" sx={{ px: 3, py: 2 }}>
            {t('calculate')}
          </Button>
        </Box>
      </Box>
      
    </Box>
    {result&&<Result/>}
    </Box>
  );
}

export default MainContent;
