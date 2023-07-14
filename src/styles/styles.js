import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";


export function getStyles() {
  const slidein = keyframes`
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    
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
      aspectRatio:'16/9'
    },
    wspButton: {
      position: "fixed",
      bottom: "20px", /* Ajusta la posición vertical según tus necesidades */
      right: "20px", /* Ajusta la posición horizontal según tus necesidades */
      zIndex: 9999, /* Asegura que el botón esté por encima de otros elementos */
      backgroundColor: "#25D366",
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
    box: {
      height: 450,
      width: '50vw',
      minWidth:400,
      backgroundColor: "white",
      margin: 5,
    },
    actionsBox: {
      display: 'flex',
      justifyContent: 'center',
    },
    icons: {
      width: 30,
      height: 30,
    },
    iconsWorks:{
      justifyContent:'space-around',
      display:'flex',
    }
  };
}

