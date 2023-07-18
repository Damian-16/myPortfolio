import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export function getStyles() {
  const slidein = keyframes`
  from {
    margin-left: 50%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    
  }
`;
  const Box = styled.div`
    height: 450px;
    width: 40vw;
    min-width: 400px;
    background-color: white;
    margin: 5px;
    transition: transform 0.3s, box-shadow 0.3s;
    border-radius: 5px;

    &:hover {
      transform: scale(1.2);
      box-shadow: 0 0 10px #00ff00;
    }
  `;
  return {
    navbar: {
      backgroundColor: "#333",
      color: "white",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
    },
    navbarList: {
      display: "flex",
      listStyle: "none",
      padding: 0,
    },
    navbarItem: {
      marginRight: "5px",
      marginLeft: "5px",
    },
    navbarLink: {
      color: "white",
      textDecoration: "none",
    },
    header: {
      marginTop: "10%",
      backgroundColor: "red",
      justifyContent: "center",
      width: "95vw",

      flexDirection: "column",
    },
    headerTitle:{
    textAlign: "left",
    marginTop: "5%",
    },
    cover: {
      width: "98%",
      borderRadius: 3,
      maxHeight: 400,
    },
    about: {
      display: "flex",
      justifyContent: "space-between",
    },
    aboutText: styled.p`
      animation-duration: 3s;
      animation-name: ${slidein};
    `,

    avatar: {
      width: 300,
      height: 300,
      borderRadius: "50%",
      aspectRatio: "16/9",
    },
    wspButton: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: 9999,
      //backgroundColor: "#25D366",
      color: "white",
      fontSize: "16px",
      padding: "12px 24px",
      borderRadius: "50%",
      border: "none",
      outline: "none",
      cursor: "pointer",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      transition: "background-color 0.3s ease",
      animationName: "bounce",
      animationDuration: "0.5s",
      animationIterationCount: "infinite",
      background:
        "url(https://icon-library.com/images/whatsapp-png-icon/whatsapp-png-icon-9.jpg) no-repeat center center / cover",
      backgroundSize: "cover",
      height: "40px",
      width: "40px",

      "@media (max-width: 480px)": {
        fontSize: "14px",
        padding: "10px 20px",
      },

      "&:hover": {
        backgroundColor: "#128C7E",
      },
    },

    contentButtons: {
      alignItems: "center",
    },
    portfolioContainer: {
      backgroundColor: "blue",
      width: "100%",
      flex: 1,
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    Box,
    actionsBox: {
      display: "flex",
      justifyContent: "center",
    },
    icons: {
      width: 30,
      height: 30,
    },
    iconsWorks: {
      justifyContent: "space-around",
      display: "flex",
    },
  };
}

export function dynamicText(params) {
  if (!params) {
    return {
      aboutText: "Hola soy Damian",
      intro:"Hola a todos! ",
      title:'Portafolio',
      title2:'Contactame',
    };
  } else {
    return {
      aboutText: "Hi Im Damian",
      intro:"HEY THERE",
      title:'Portfolio',
      title2:'Contact Me',
  
    };
  }
}
