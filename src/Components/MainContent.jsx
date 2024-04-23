import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Stack, width } from "@mui/system";
import React from "react";

function MainContent() {
  return (
    <Box   display="flex" justifyContent="center" sx={{ m:"auto" ,mt:5}}>
      <Box>
        <Grid container spacing={{sm:0, md:3}}>
          <Grid item sm={12} md={6}>
            <Box sx={{m:2}}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                Total gross annual household income
              </Typography>
              <TextField
                sx={{ width: "325px" }}
                id="outlined-basic1"
                type="number"
                variant="outlined"
              />
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box sx={{m:2}}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                Total gross annual household income
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
                Down payment
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
                Province or territory of residence
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
                Loans and other debts (per month)
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
                Loans and other debts (per month)
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
          <Button variant="contained" sx={{ px: 3, py: 2 }}>
            Calculate
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default MainContent;
