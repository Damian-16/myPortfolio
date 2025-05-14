import React, { useState } from "react";
import Navbar from "./navbar";

import Footer from "./footer";
import Portfolio from "./portfolio";
import { dynamicText } from "../styles/styles";
import { Toaster } from "react-hot-toast";

const HomeView = () => {
  const [language, setLanguage] = useState();
  const text = dynamicText(language);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const appStyles = {
    background: darkMode ? "#333" : "#FAF6F2",
    color: darkMode ? "white" : "black",
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
    alignItems: "center",
    alignText: "center",
    maxWidth: "100vw",
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
      <Toaster />

      <Portfolio language={language} darkMode={darkMode} text={text} />

      <Footer darkMode={darkMode} text={text} />
    </div>
  );
};

export default HomeView;
