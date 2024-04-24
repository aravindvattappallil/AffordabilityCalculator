import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import HouseOutlined from "@mui/icons-material/House";
import { LocalAtmOutlined } from "@mui/icons-material";
import Context from '../Context'

function Result() {

  const {t} = useContext(Context)
  return (
    <Box>
      <Typography
        display="flex"
        justifyContent="center"
        style={{ fontSize: "4vw", fontWeight: 100 }}
        variant="subtitle1"
        gutterBottom
      >
        {t("Youraffordabilityestimate")}
      </Typography>
      <Stack
        sx={{ p: "5vw" }}
        direction={{sm:"row"}}
        spacing={20}
        display="flex"
        justifyContent="center"
       
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <HouseOutlined style={{ fontSize: "100px" }} />
          <Typography
            style={{ fontSize: "2vw", fontWeight: 100 }}
            variant="subtitle1"
            gutterBottom
          >
          {t("Maximumpurchaseprice")}
          </Typography>
          <Typography
            style={{ fontSize: "4vw", fontWeight: 500 }}
            variant="subtitle1"
            gutterBottom
          >
           $1000
          </Typography>
        </Box>

        <Divider sx ={{display:{xs:'block',sm:'none'}}} orientation="horizontal" flexItem />
    
        <Divider sx ={{display:{xs:'none',sm:'block'}}} orientation="vertical" flexItem />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <LocalAtmOutlined style={{ fontSize: "100px" }} />
          <Typography
            style={{ fontSize: "2vw", fontWeight: 100 }}
            variant="subtitle1"
            gutterBottom
          >
            {t("Monthlymortgagepayment")}
          </Typography>
          <Typography
            style={{ fontSize: "4vw", fontWeight: 500 }}
            variant="subtitle1"
            gutterBottom
          >
           $1000
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default Result;
