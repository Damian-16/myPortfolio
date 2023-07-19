import React, { useState } from "react";
import Navbar from "./navbar";

import Footer from "./footer";
import Portfolio from "./portfolio";
import { dynamicText } from "../styles/styles";

const HomeView = () => {
  const [language, setLanguage] = useState();
  const text = dynamicText(language);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const appStyles = {
    
   // backgroundColor: darkMode ? "#333" : "white",
    background:darkMode ? "#333" :'rgb(219,227,199)',
    backgroundImage: !darkMode &&'linear-gradient(90deg, rgba(219,227,199,1) 14%, rgba(251,254,246,1) 100%)',    
    color: darkMode ? "white" : "black",
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    alignText: 'center',
    maxWidth:'100vw'
  };

  return (
    <div style={appStyles}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        setLanguage={setLanguage}
        text={text}
      />

      <Portfolio language={language} darkMode={darkMode} text={text} />

      <Footer text={text} />
    </div>
  );
};

export default HomeView;
