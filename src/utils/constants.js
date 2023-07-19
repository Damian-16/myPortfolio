export const proyects = [{
    id:1,
    title: 'Delivery Tracker',
    previewImg:'src/assets/img/proyects/DeliveryTrackerImg.png',
    description: 'una aplicacion de rastreo',
    descriptionEn:' a tracking app okeyyy',
    techStack: ['React','Redux','Typescript','MySql'],
    gitHubLink: '',
    demoLink: 'http://deliverytracker.softsytech.com/home',
    
  },
  { id:2,
    title: 'Portfolio',
    previewImg:'',
    description: '',
    descriptionEn:'',
    techStack: ['React','Redux'],
    gitHubLink: '',
    demoLink: '',
    
  },
  { id:3,
    title: 'Pokedex',
    previewImg:'src/assets/img/proyects/Pokedex.png',
    description: 'Una aplicacion de Búsqueda con Inicio de sesion ,Perfil personalizable y conexion con Base de Datos',
    descriptionEn:'A search App with Login ,customizable profile and database conection',
    techStack:['React','Redux','Firebase'] ,
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
    title: 'PikaGame',
    previewImg:'src/assets/img/proyects/Pikagame.png',
    description: 'Una aplicacion de Búsqueda con Inicio de sesion ,Perfil personalizable y conexion con Base de Datos',
    descriptionEn:'A search App with Login ,customizable profile and database conection',
    techStack:['Javascript','Html','Css'] ,
    gitHubLink: 'https://github.com/Damian-16/CssGrid',
    demoLink: 'https://damian-16.github.io/CssGrid/contexto-de-apilamiento.html',
   
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

  export const linksRedirect = (url) => {
    window.open(url,"_blank")
   }