import React from "react";
import { getStyles } from "../styles/styles";
import { proyects, techIcons } from "../utils/constants";

const Portfolio = () => {
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
      <div key={item.id} style={styles.box}>
        <h2>{item.title}</h2>
        <img></img>
        <p>{item.description}</p>
        <div style={styles.actionsBox}>
          {returnIcons(item.techStack)}
          <button>1</button>
          <button>2</button>
        </div>
      </div>
    ));
  };
  return (
    <div id="portfolio" style={styles.portfolioContainer}>
      {mapProyects()}
    </div>
  );
};

export default Portfolio;
