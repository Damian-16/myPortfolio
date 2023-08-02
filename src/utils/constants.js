import { toast } from "react-hot-toast";
import { dynamicText } from "../styles/styles";

export const proyects = [{
    id:1,
    title: 'Delivery Tracker',
    previewImg:'src/assets/img/proyects/DeliveryTrackerImg.png',
    description: 'Una aplicación de Rastreo y Delivery de Una aplicación de Rastreo y Delivery de productos, actualmente en producción, que brinda a los usuarios la posibilidad de realizar seguimiento de sus pedidos y disfrutar del servicio de entrega de productos. ,Actualmente en producción , por motivos de Mantenimientos del Servidor en este momento no se encuentra funcionando',
    descriptionEn:'A Tracking and Delivery application for A Tracking and Delivery application for products, currently in production, which gives users the ability to track their orders and enjoy product delivery service,Currently in production, for reasons of Server Maintenance at this time it is not working',
    techStack: ['React','Redux','Typescript','MySql'],
    gitHubLink: null,
    demoLink: 'http://deliverytracker.softsytech.com/home',
    
  },
  { id:2,
    title: 'Batatabit Page',
    previewImg:'src/assets/img/proyects/Batatabit.jpg',
    description: 'Una landing page responsive diseñada para proporcionar información actualizada y relevante sobre el mercado de criptomonedas. Esta página web se adapta perfectamente a cualquier dispositivo, ofreciendo una experiencia de usuario óptima tanto en computadoras de escritorio como en tablets y teléfonos móviles.',
    descriptionEn:'A responsive landing page designed to provide up-to-date and relevant information about the cryptocurrency market. This website adapts perfectly to any device, offering an optimal user experience on desktop computers, tablets and mobile phones.',
    techStack: ['Html','Javascript','Css'],
    gitHubLink: 'https://github.com/Damian-16/MobileFirst',
    demoLink: 'https://damian-16.github.io/MobileFirst/',
    
  },
  { id:3,
    title: 'Pokedex',
    previewImg:'src/assets/img/proyects/Pokedex.png',
    description: 'Una aplicacion de Búsqueda con Inicio de sesion ,Perfil personalizable y conexion con Base de Datos,con su Host configurado con Netlify',
    descriptionEn:'A search App with Login ,customizable profile and database conection',
    techStack:['React','Redux','Bootstrap','Firebase'] ,
    gitHubLink: 'https://github.com/Damian-16/AprendiendoRedux',
    demoLink: 'https://649b735f8fc10a0b4b73db40--pokedexwithredux.netlify.app/login',
   
  },
  { id:4,
    title: 'PikaGame',
    previewImg:'src/assets/img/proyects/Pikagame.png',
    description: 'Un pequeño juego hecho con Animaciones Css y Lógica con Js',
    descriptionEn:'A little game made with Css Animations and Js logic',
    techStack:['Javascript','Html','Css'] ,
    gitHubLink: 'https://github.com/Damian-16/CssGrid',
    demoLink: 'https://damian-16.github.io/CssGrid/contexto-de-apilamiento.html',
   
  },
{   id:5,
    title: 'Yard Store',
    previewImg:'src/assets/img/proyects/YardStore.png',
    description: 'Una Tienda virtual con funcionalidad de agregar o quitar Productos de un carrito virtual, Host configurado con Firebase',
    descriptionEn:'A Virtual Store with functionality to add or remove Products from a virtual cart,\nHost configured with Firebase',
    techStack:['Angular','Typescript','Firebase'] ,
    gitHubLink: 'https://github.com/Damian-16/my-store-angular',
    demoLink: 'https://yarnstore-62ab6.web.app',
   
  }];

  export const techIcons = [
    {
     name:'React',
     icon:'https://icon-library.com/images/react-icon/react-icon-29.jpg'        
    },
    {
        name:'Redux',
        icon:'https://icon-library.com/images/react-icon/react-icon-28.jpg'
    },
    {
      name:'Html',
      icon:'https://icon-library.com/images/html5-icon/html5-icon-7.jpg'
    },
    {
      name:'Javascript',
      icon:'https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg'
    },
    {
      name:'Css',
      icon:'https://icon-library.com/images/css3-icon/css3-icon-28.jpg'
    },
    {
      name:'Angular',
      icon:'https://icon-library.com/images/angularjs-icon/angularjs-icon-10.jpg'
    },
    {
      name:'Bootstrap',
      icon:'https://icon-library.com/images/bootstrap-icon-png/bootstrap-icon-png-10.jpg'
    },
    {
      name:'Typescript',
      icon:'https://icon-library.com/images/mit-icon/mit-icon-25.jpg'
    },
    {
      name:'MySql',
      icon:'https://icon-library.com/images/a2757b299d_45223.png'
    },
    {
      name:'PostgreSql',
      icon:'https://icon-library.com/images/postgresql-icon/postgresql-icon-7.jpg'
    },
    {
      name:'Firebase',
      icon:'https://icon-library.com/images/65813-google-computer-icons-github-firebase-angularjs-messaging.png'
    }
  ]

  export const linksRedirect = (url,msg) => {
     const lng = dynamicText(msg)
    !url? toast.error(lng.toastErr):
    window.open(url,"_blank")
   }