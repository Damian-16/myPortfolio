import React, { useState } from "react";
import Navbar from "./navbar";

import Footer from "./footer";
import Portfolio from "./portfolio";
import { dynamicText } from "../styles/styles";


const HomeView = () => {
  const [language, setLanguage] = useState();
  const text = dynamicText(language);
  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} text={text} />     
      <Portfolio  text={text} />
     
      <Footer  text={text} />
    </>
  );
};

export default HomeView;
