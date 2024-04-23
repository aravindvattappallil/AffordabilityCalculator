import { Add, Settings } from "@mui/icons-material";
import { Box, Button, Container, styled } from "@mui/material";
import Navbar from "./Components/Navbar";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

function App() {


  return (
    <Box >
      <Navbar/>
      <MainContent/>
      <Footer/>
    </Box>
  );
}

export default App;
