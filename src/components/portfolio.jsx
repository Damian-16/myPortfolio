import React, { useEffect, useState } from "react";
import { getStyles } from "../styles/styles";
import { linksRedirect, proyects, techIcons } from "../utils/constants";

const Portfolio = ({ text, language, darkMode }) => {
  const styles = getStyles();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 590);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 590);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const TechIcon = ({ name, icon }) => (
    <figure key={name}>
      <img src={icon} alt={name} style={styles.icons} />
      <figcaption>{name}</figcaption>
    </figure>
  );

  const Project = ({ item }) => (
    <styles.Box
      style={{
        background: darkMode ? "rgb(2,0,36)" : "rgb(224,231,207)",
        backgroundImage: darkMode
          ? "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,0,7,1) 35%, rgba(12,60,69,1) 100%)"
          : "radial-gradient(circle, rgba(224,231,207,1) 6%, rgba(252,255,243,1) 46%, rgb(111, 220, 191) 200%)",
      }}
      key={item.id}
    >
      <h2>{item.title}</h2>
      <img src={item.previewImg} style={{ height: 200, width: "90%" }} />
      <p
        style={{
          fontSize: isMobile ? ".8em" : "1em",
          margin: 15,
          textAlign: "start",
        }}
      >
        {!language ? item.description : item.descriptionEn}
      </p>
      <div style={styles.actionsBox}>{item.techStack.map(renderTechIcon)}</div>
      <button
        style={{ margin: 8 }}
        onClick={() => linksRedirect(item.gitHubLink, language)}
      >
        Github
      </button>
      <button onClick={() => linksRedirect(item.demoLink, language)}>
        Demo
      </button>
    </styles.Box>
  );

  const renderTechIcon = (techName) => {
    const icon = techIcons.find((icon) => icon.name === techName);
    return <TechIcon key={techName} name={techName} icon={icon.icon} />;
  };

  const renderProjects = () => proyects.map((item) => <Project key={item.id} item={item} />);

  return (
    <>
      <h1 id="portfolio" style={{ width: "inherit", marginTop: 5 }}>
        {text.title}
      </h1>
      {isMobile && <p>{text.tabParagraph}</p>}
      <styles.PortfolioContainer>{renderProjects()}</styles.PortfolioContainer>
    </>
  );
};

export default Portfolio;
