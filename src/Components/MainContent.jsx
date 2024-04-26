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
import React, { useContext, useEffect, useState } from "react";
import Result from "./Result";
import Context from '../Context'
import { useDispatch, useSelector } from "react-redux";
import {calculateMontlyPayment,updateValues,loanAmountCalc} from "../store/config"

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

const data = useSelector((state=>state.config))

  useEffect(()=>{console.log("down")},[data.downPayment])

 const [values,setValues]=useState({ homeValue:0,
  downPayment:0,
  loanAmount:0,
  interestRate:0,
  loanDuration:0,
  percent:0})

const dispatch = useDispatch()
  
  const {t} = useContext(Context)
  const [result,setResult]= useState(false)
  const [enterValue,setEnterValue]= useState(false)


  const handleonResultClick =()=>{
    if (data.homeValue >0 && data.downPayment > 0 && data.interestRate > 0 && data.loanAmount > 0 && data.loanDuration > 0) {
      setResult(true);
      console.log("home:" + data.homeValue);
      setEnterValue(false)
  } else {
      setEnterValue(true);
  }
  
    
    dispatch(updateValues(values))
    dispatch(calculateMontlyPayment())
  }

  const handleOnChange = (e) => {
    setValues( (prevState) => ( {
        ...prevState,
        [e.target.name] : e.target.value
      
    }));
    
  }
//   const handleDown =(e)=>{
//     console.log("update value")
//     dispatch(updateValues(values))
// dispatch(loanAmountCalc(e.target.value))
//   }

  return (
    <Box > 
    { enterValue &&   <Box display="flex" justifyContent="center" color="red" sx={{pt:2}}>
      <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                
                {t("plsEnterValue")}
              </Typography>
      </Box>}

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
               
          defaultValue=""
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
              {t("Totalgrossannualhouseholdincome")}
              </Typography>
              <TextField
                sx={{ width: "325px" }}
                id="outlined-basic2"
                type="number"
                name="homeValue"
                variant="outlined"
                onChange={handleOnChange}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={{sm:0, md:3}}>
          <Grid item sm={12} md={6}>
            <Box sx={{m:2}}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
             {t(" Downpayment ")}
              </Typography>
              <TextField
                sx={{ width: "325px" }}
                id="outlined-basic3"
                type="number"
                name="downPayment"
                variant="outlined"
                onChange={handleOnChange}
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
                name="loanAmount"
                variant="outlined"
                onChange={handleOnChange}
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
                name="interestRate"
                variant="outlined"
                onChange={handleOnChange}
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
                name="loanDuration"
                variant="outlined"
                onChange={handleOnChange}
              />
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center" sx={{ my: 5 }}>
          <Button onClick={handleonResultClick} variant="contained" sx={{ px: 3, py: 2 }}>
            {}
            {result?t('recalculate'):t('calculate')}
          </Button>
        </Box>
      </Box>
      
    </Box>
    {result&&<Result/>}
    </Box>
  );
}

export default MainContent;
