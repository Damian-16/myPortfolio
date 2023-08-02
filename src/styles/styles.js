import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import cover from "../assets/img/coverAbout.png";

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
    width: 40vw;
    min-width: 500px;
    background-color: transparent;
    margin: 15px;
    transition: transform 0.3s, box-shadow 0.3s;
    border-radius: 5px;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 10px #00ff00;
    }
    @media (max-width: 768px) {
      width: 80vw;
      min-width: 500px;
    }
  `;

  const titleHeader = styled.h1`
    max-width: 40ch;
    text-align: center;
    transform: scale(0.94);
    animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
    @keyframes scale {
      100% {
        transform: scale(1);
      }
    }

    span {
      display: inline-block;
      opacity: 0;
      filter: blur(4px);
    }

    span:nth-child(1) {
      animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(2) {
      animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(3) {
      animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(4) {
      animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(5) {
      animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(6) {
      animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(7) {
      animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(8) {
      animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(9) {
      animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(10) {
      animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(11) {
      animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(12) {
      animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(13) {
      animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(14) {
      animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(15) {
      animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(16) {
      animation: fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(17) {
      animation: fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    span:nth-child(18) {
      animation: fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    @keyframes fade-in {
      100% {
        opacity: 1;
        filter: blur(0);
      }
    }
  `;

  const Container = styled.div`
    position: relative;
  `;

  const ImageBackground = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url(${cover});
background-size: cover;
opacity: 0.2;
border-radius: 40px;
pointer-events: none; /* Evita que el pseudo-element
 
`;

const NeonInput = styled.input`
background-color: transparent;
border: none;
color: #11aec6;
padding: 10px 15px;
font-size: 16px;
border-radius: 5px;
box-shadow: 0 0 5px #11aec6, 0 0 10px #11aec6, 0 0 15px #11aec6, 0 0 20px rgba(17, 174, 198, 0.8);
outline: none;
margin:3px;
transition: box-shadow 0.3s ease;

&::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
&:hover {
  box-shadow: 0 0 5px #00ff00, 0 0 15px #00ff00, 0 0 25px #00ff00, 0 0 40px rgba(0, 255, 0, 0.8);
}
`
const NeonTextarea = styled.textarea`
  background-color: transparent;
  border: none;
  color: #11aec6;
  padding: 50px 55px;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0 0 5px #11aec6, 0 0 10px #11aec6, 0 0 15px #11aec6, 0 0 20px rgba(17, 174, 198, 0.8);
  outline: none;
  resize: none;
  margin-bottom: 5px; 
  overflow: auto; 
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 0 5px #00ff00, 0 0 15px #00ff00, 0 0 25px #00ff00, 0 0 40px rgba(0, 255, 0, 0.8);
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  &::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #11aec6 ;
    border-radius: 10px;
  }


`;



  return {
    navbar: {
      color: "white",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex:999
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


      justifyContent: "center",
      width: "95vw",
      flexDirection: "column",
    },
    Container,
    ImageBackground,
    titleHeader,
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
      z-index: 1;
      font-weigth: bolder;
      font-size: 1.2rem;
      @media (max-width: 768px) {
        font-size: 0.9rem;
        margin: 5%;
      }
    `,

    avatar: {
      width: 200,
      height: 200,
      minWidth: 200,
      borderRadius: "50%",
      margin: "3%",
      marginRight: "5%",
      zIndex: 1,
      overflow: "hidden",
    },
    avatarStyle: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    wspButton: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: 9999,

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
      position: "fixed",
      alignItems: "center",
      zIndex: 1,
      userSelect: "none",
      right: 20,
      top: 10,
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
    
    NeonInput,
    NeonTextarea
  
  };
}

export function dynamicText(params) {
  if (!params) {
    return {
      init: "Inicio",
      aboutText:
        "Un apasionado desarrollador de frontend con más de 2 años de experiencia en el fascinante mundo de la tecnología.\n Siempre estoy buscando nuevos desafíos y oportunidades para hacer crecer mis habilidades y seguir construyendo experiencias sorprendentes para los usuarios.\nEn mi viaje como desarrollador, he aprendido que cada línea de código es una oportunidad para mejorar la vida de las personas a través de soluciones innovadoras y creativas.\n\nBienvenido a mi portafolio, donde podrás explorar algunos de mis proyectos y conocer más sobre mi trabajo y trayectoria como desarrollador. ¡Espero que disfrutes tu visita y no dudes en contactarme si quieres hablar sobre proyectos emocionantes o colaboraciones inspiradoras",
      intro:
        "Hola a todos!  Soy Damian Pinedo Morganti , Desarrollador Front-End",
      title: "Portafolio",
      title2: "Contactame",
      changeLng: "Cambiar a Inglés",
      toastErr: "Este Repositorio se Encuentra en Privado actualmente",
      message:["Nombre","Correo Electronico","Mensaje","Enviar"],
      toastMail:"El Mensaje Fue enviado con Éxito",
      toastMailErr:"Algo salio mal Intente de Nuevo, o Intente más tarde",
    };
  } else {
    return {
      init: "Start",
      aboutText:
        "A passionate frontend developer with more than 2 years of experience in the fascinating world of technology.\nIn my journey as a developer, I learned that each line of code is an opportunity to improve life of people through innovative and creative solutions.\n\nWelcome to my portfolio, where you can explore some of my projects and learn more about my work and journey as a developer. I hope you enjoy your visit and don't hesitate to contact me if you want to talk about exciting projects or inspiring collaborations!",
      intro: "Hello Everyone! I'm Damian Pinedo Morganti, Frontend Developer",
      title: "Portfolio",
      title2: "Contact Me",
      changeLng: "Change to Spanish",
      toastErr: "This Repository is currently in Private Mode",
      message:["Name","Email","Message","Send"],
      toastMail:"The Message  has been sent Succesfuly",
      toastMailErr:"Something went wrong try again or later ",
    };
  }
}
