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
    height: 550px;
    width: 45vw;
    min-width: 600px;
    background-color: transparent;
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
      // backgroundColor: "#333",
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

      justifyContent: "center",
      width: "95vw",

      flexDirection: "column",
    },
    headerTitle: {
      textAlign: "left",
      marginTop: "8%",
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
    aboutMobile: {
      display: "flex",
      flexWrap: "wrap",
    
    },
    aboutText: styled.p`
      animation-duration: 3s;
      animation-name: ${slidein};
      white-space: pre-line;
      text-align: start;
    `,

    avatar: {
      width: 300,
      height: 300,
      borderRadius: "50%",
      aspectRatio: "16/9",
      marginRight: "5%"
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

      "@media (maxWidth: 480px)": {
        fontSize: "14px",
        padding: "10px 20px",
      },

      "&:hover": {
        backgroundColor: "#128C7E",
      },
    },

    contentButtons: {
      alignItems: "center",
      zIndex: 1,
      userSelect: "none",
    },


    portfolioContainer: {
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
      cursor: "pointer",
    },
    iconsWorks: {
      justifyContent: "space-around",
      display: "flex",
      marginBottom: 25,
    },
  };
}

export function dynamicText(params) {
  if (!params) {
    return {
      init:"Inicio",
      aboutText:"¡Hola! Soy Damián, un apasionado desarrollador de frontend con más de 2 años de experiencia en el fascinante mundo de la tecnología.\nMi sed de conocimiento y mi amor por aprender me han llevado a expandir mis habilidades y aspirar a ser un desarrollador fullstack.\nÚltimamente, me he dedicado a ampliar mi conjunto de habilidades para abarcar no solo el frontend, sino también la creación de aplicaciones completas y funcionales en todas sus capas.\nEn mi viaje como desarrollador, he aprendido que cada línea de código es una oportunidad para mejorar la vida de las personas a través de soluciones innovadoras y creativas. Siempre estoy buscando nuevos desafíos y oportunidades para hacer crecer mis habilidades y seguir construyendo experiencias sorprendentes para los usuarios.\nBienvenido a mi portafolio, donde podrás explorar algunos de mis proyectos y conocer más sobre mi trabajo y trayectoria como desarrollador. ¡Espero que disfrutes tu visita y no dudes en contactarme si quieres hablar sobre proyectos emocionantes o colaboraciones inspiradoras",
      intro: "Hola a todos!",
      title: "Portafolio",
      title2: "Contactame",
      changeLng:"Cambiar a Inglés",
      toastErr:"Este Repositorio se Encuentra en Privado actualmente"
    };
  } else {
    return {
      init:"Start",
      aboutText: "Hi Im Damian",
      intro: "HEY THERE",
      title: "Portfolio",
      title2: "Contact Me",
      changeLng:"Change to Spanish",
      toastErr:"This Repository is currently in Private Mode"
    };
  }
}
