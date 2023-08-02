import React from "react";
import { getStyles } from "../styles/styles";
import { linksRedirect, proyects, techIcons } from "../utils/constants";

const Portfolio = ({ text, language,darkMode }) => {
  const styles = getStyles();
  const returnIcons = (icons) => {
    const newIcons = techIcons.filter((icon) => icons.includes(icon.name));
    return newIcons.map((item) => (
      <figure key={item.name}>
        <img src={item.icon} alt={item.name} style={styles.icons}></img>
        <figcaption>{item.name}</figcaption>
      </figure>
    ));
  };

  const mapProyects = () => {
    return proyects.map((item) => (
      <styles.Box
        style={{
          background:darkMode? "rgb(2,0,36)":"rgb(224,231,207)",
          backgroundImage:darkMode?
            "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,0,7,1) 35%, rgba(12,60,69,1) 100%)":
            "radial-gradient(circle, rgba(224,231,207,1) 6%, rgba(252,255,243,1) 46%, rgba(180,202,144,1) 100%)",
        }}
        key={item.id}
      >
        <h2>{item.title}</h2>
        <img src={item.previewImg} style={{ height: 200, width: "90%" }} />
        <p style={{fontSize:"1em"}}>{!language ? item.description : item.descriptionEn}</p>
        <div style={styles.actionsBox}>{returnIcons(item.techStack)}</div>
        <button
          style={{ margin: 8 }}
          onClick={() => linksRedirect(item.gitHubLink,language)}
        >
          Github
        </button>
        <button onClick={() => linksRedirect(item.demoLink,language)}>Demo</button>
      </styles.Box>
    ));
  };

  return (
    <div style={styles.portfolioContainer}>
      <h1 id="portfolio" style={{ width: "inherit", marginTop: 5 }}>
        {text.title}
      </h1>
      {mapProyects()}
    </div>
  );
};

export default Portfolio;
