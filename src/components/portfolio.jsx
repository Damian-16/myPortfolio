import React from "react";
import { getStyles } from "../styles/styles";
import { linksRedirect, proyects, techIcons } from "../utils/constants";

const Portfolio = ({text,language}) => {
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
      <styles.Box key={item.id} >
        <h2>{item.title}</h2>
        <img src={item.previewImg} style={{height:200,width:'90%'}} />
        <p>{!language?item.description:item.descriptionEn}</p>
        <div style={styles.actionsBox}>
          {returnIcons(item.techStack)}
         
        </div>
        <button style={{margin:8}} onClick={()=>linksRedirect(item.gitHubLink)}>Github</button>
        <button onClick={()=>linksRedirect(item.demoLink)}>Demo</button>
      </styles.Box>
    ));
  };
  
  return (
    <div  style={styles.portfolioContainer}>
      <h1 id="portfolio" style={{width:'inherit',marginTop:5}}>{text.title}</h1>
      {mapProyects()}
    </div>
  );
};

export default Portfolio;
