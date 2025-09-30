import React, { useState, } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme, { darkTheme } from "./Theme";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/NavBar";
import Hero from "./pages/Home/sections/Hero/Hero";
import About from "./pages/Home/sections/About/About";
import Projects from "./pages/Home/sections/Projects/Projects";

const App: React.FC = () => {
  
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prev: any) => {
      localStorage.setItem("darkMode", JSON.stringify(!prev)); 
      return !prev;
    });
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
