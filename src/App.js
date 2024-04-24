import { Add, Settings } from "@mui/icons-material";
import { Box, Button, Container, styled } from "@mui/material";
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import Title from "./Components/Title";
import "./translation/i18n"
import {useTranslation}from "react-i18next"
import Context from "./Context";

function App() {

const {t} = useTranslation();


  return (
    <Box >
      <Context.Provider value={{t}}>
      <Navbar/>
      <Title/>
      <MainContent/>
      <Footer/>
      </Context.Provider>
    </Box>
  );
}

export default App;
