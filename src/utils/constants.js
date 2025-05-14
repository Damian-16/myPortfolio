import { toast } from "react-hot-toast";
import { dynamicText } from "../styles/styles";
import deliveryTrackerimg from '../assets/img/DeliveryTrackerImg.png'
import batatabit from '../assets/img/Batatabit.jpg'
import yard from '../assets/img/YardStore.png'
import condaty  from '../assets/img/CondatyWeb.jpg'
import condatyR from '../assets/img/CondatyR.jpg'

export const proyects = [
  {
    id:1,
    title: 'Condaty App',
    previewImg:condatyR,
    description: 'Aplicación de Condaty,  Mi trabajo se centró principalmente en el desarrollo de interfaces modernas y responsivas para las aplicaciones web internas y externas, optimizando la experiencia del usuario, integrando componentes reutilizables y garantizando una navegación fluida entre módulos.',
    descriptionEn:'Condaty Application, My work focused primarily on developing modern and responsive interfaces for both internal and external web applications, optimizing the user experience, integrating reusable components, and ensuring smooth navigation across modules.',
    techStack: ['React Native','Typescript','Tailwind','Php'],
    gitHubLink: null,
    demoLink: null,
    
  },
  
  {
  id:1,
  title: 'Condaty Web Page',
  previewImg:condaty,
  description: 'La página web oficial de la aplicación Condaty, con toda la información pertinente, es responsiva y se encuentra actualmente en producción.',
  descriptionEn:'The official website of the Condaty application, with all the relevant information, fully responsive and currently in production',
  techStack: ['Next Js','Typescript'],
  gitHubLink: null,
  demoLink: 'https://www.condaty.com',
  
},
  { id:2,
    title: 'Delivery Tracker',
    previewImg:deliveryTrackerimg,
    description: 'Una aplicación de Rastreo y Delivery de productos,que brinda a los usuarios la posibilidad de realizar seguimiento de sus pedidos y disfrutar del servicio de entrega de los mismos. ,Actualmente esta desplegado en producción , por motivos de Mantenimientos del Servidor en este momento no se encuentra funcionando',
    descriptionEn:'A Tracking and Delivery application for A Tracking and Delivery application for products, currently in production, which gives users the ability to track their orders and enjoy product delivery service,Currently in production, for reasons of Server Maintenance at this time it is not working',
    techStack: ['React','Redux','Typescript','MySql'],
    gitHubLink: null,
    demoLink: 'http://deliverytracker.softsytech.com/home',
    
  },
  { id:3,
    title: 'Yard Store',
    previewImg:yard,
    description: 'Una Tienda virtual con funcionalidad de agregar o quitar Productos de un carrito virtual, Host configurado con Firebase',
    descriptionEn:'A Virtual Store with functionality to add or remove Products from a virtual cart,\nHost configured with Firebase',
    techStack:['Angular','Typescript','Firebase'] ,
    gitHubLink: 'https://github.com/Damian-16/my-store-angular',
    demoLink: 'https://yarnstore-62ab6.web.app',
   
  },
  { id:4,
    title: 'Batatabit Page',
    previewImg:batatabit,
    description: 'Una landing page responsive diseñada para proporcionar información actualizada y relevante sobre el mercado de criptomonedas. Esta página web se adapta perfectamente a cualquier dispositivo, ofreciendo una experiencia de usuario óptima tanto en computadoras de escritorio como en tablets y teléfonos móviles.',
    descriptionEn:'A responsive landing page designed to provide up-to-date and relevant information about the cryptocurrency market. This website adapts perfectly to any device, offering an optimal user experience on desktop computers, tablets and mobile phones.',
    techStack: ['Html','Javascript','Css'],
    gitHubLink: 'https://github.com/Damian-16/MobileFirst',
    demoLink: 'https://damian-16.github.io/MobileFirst/',
    
  },


  ];

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
    },
    {
      name:'React Native',
      icon:'https://icon-library.com/images/react_1353128.png'
    },
    {
      name:'Next Js',
      icon:'https://www.svgrepo.com/show/354113/nextjs-icon.svg'
    },
    {
      name:'Tailwind',
      icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png'
    },
    {
      name:'Php',
      icon:'https://cdn-icons-png.flaticon.com/128/5968/5968332.png'
    }
    
  ]

  export const linksRedirect = (url,msg) => {
     const lng = dynamicText(msg)
    !url? toast.error(lng.toastErr):
    window.open(url,"_blank")
   }