import { toast } from "react-hot-toast";
import { dynamicText } from "../styles/styles";

export const proyects = [
  {
    id: 1,
    title: "Condaty Admin",
    previewImg: new URL("../assets/img/CondatyAdm.JPG", import.meta.url).href,
    description:
      "Aplicación de Condaty administrador, en esta web app mi mi trabajo tuvo que ver con la integración de nuevas funcionalidades, optimización del rendimiento y la mejora de la experiencia del usuario.",
    descriptionEn:
      "Condaty Admin Application, In this web app my work involved integrating new functionalities, optimizing performance, and enhancing the user experience.",
    techStack: ["Next Js", "Typescript", "Tailwind", "Php"],
    gitHubLink: null,
    demoLink: "https://admin.condaty.com",
  },
  {
    id: 2,
    title: "Condaty App",
    previewImg: new URL("../assets/img/CondatyR.jpg", import.meta.url).href,
    description:
      "Aplicación de Condaty,  Mi trabajo se centró principalmente en el desarrollo de interfaces modernas y responsivas para las aplicaciones web internas y externas, optimizando la experiencia del usuario, integrando componentes reutilizables y garantizando una navegación fluida entre módulos.",
    descriptionEn:
      "Condaty Application, My work focused primarily on developing modern and responsive interfaces for both internal and external web applications, optimizing the user experience, integrating reusable components, and ensuring smooth navigation across modules.",
    techStack: ["React Native", "Typescript", "Tailwind", "Php"],
    gitHubLink: null,
    demoLink: "https://play.google.com/store/apps/details?id=com.rnowner",
  },
  {
    id: 3,
    title: "Condaty Web Page",
    previewImg: new URL("../assets/img/CondatyWeb.JPG", import.meta.url).href,
    description:
      "La página web oficial de la aplicación Condaty, con toda la información pertinente, es responsiva y se encuentra actualmente en producción.",
    descriptionEn:
      "The official website of the Condaty application, with all the relevant information, fully responsive and currently in production",
    techStack: ["Next Js", "Typescript"],
    gitHubLink: null,
    demoLink: "https://www.condaty.com",
  },
  {
    id: 4,
    title: "Fos Admin",
    previewImg: new URL("../assets/img/fosadmin.JPG", import.meta.url).href,
    description:
      "Una página de administracion de clientes y medidas de métricas de ingresos y egresos, con autenticación de usuarios y roles.",
    descriptionEn:
      "A client administration page and metrics measurements of income and expenses, with user authentication and roles.",
    techStack: ["Next Js", "Typescript", "Php", "MySql"],
    gitHubLink: null,
    demoLink: "https://fosadmin.condaty.com/#i",
  },
  {
    id: 5,
    title: "Elekta App",
    previewImg: new URL("../assets/img/elektaApp.jpg", import.meta.url).href,
    description:
      "Una aplicación móvil con funcionalidades de red social, en esta app mi trabajo fue desarrollar las interfaces de publicaciones,y chat en tiempo real , aplicando buenas prácticas de desarrollo y optimizando el rendimiento para una experiencia de usuario fluida.",
    descriptionEn:
      "A mobile application with social media functionalities, in this app my work was to develop the post interfaces and real-time chat, applying good development practices and optimizing performance for a smooth user experience.",
    techStack: ["React Native", "Typescript", "Php", "MySql"],
    gitHubLink: null,
    demoLink:
      "https://play.google.com/store/apps/details?id=com.elektaUruguay&hl=es_BO",
  },
  {
    id: 6,
    title: "Elekta Admin",
    previewImg: new URL("../assets/img/elektaAdm.JPG", import.meta.url).href,
    description:
      "Una página de administración de los usuarios de la app Elekta, en esta web app trabaje con funcionalidades de CRUD y gestión de roles y permisos.",
    descriptionEn:
      "An administration page for the users of the Elekta app, in this web app I worked with CRUD functionalities and role and permission management.",
    techStack: ["Next Js", "Typescript", "Php", "MySql"],
    gitHubLink: null,
    demoLink: "https://admin.elekta.app",
  },
  {
    id: 7,
    title: "Delivery Tracker",
    previewImg: new URL("../assets/img/DeliveryTrackerImg.png", import.meta.url)
      .href,
    description:
      "Una aplicación de Rastreo y Delivery de productos,que brinda a los usuarios la posibilidad de realizar seguimiento de sus pedidos y disfrutar del servicio de entrega de los mismos. ,Actualmente esta desplegado en producción , por motivos de Mantenimientos del Servidor en este momento no se encuentra funcionando",
    descriptionEn:
      "A Tracking and Delivery application for products, currently in production, which gives users the ability to track their orders and enjoy product delivery service,Currently in production, for reasons of Server Maintenance at this time it is not working",
    techStack: ["React", "Redux", "Typescript", "MySql", "Firebase"],
    gitHubLink: null,
    demoLink: "http://deliverytracker.softsytech.com/home",
  },
];

export const techIcons = [
  {
    name: "React",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHovQBiy5Txc47_pA_PPHBI1Se329Chh1TCw&s",
  },
  {
    name: "Redux",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDkubK9ABMZZ4rmhRf9yNA9MvAF80lfJeGQ&s",
  },
  {
    name: "Html",
    icon: "https://icon-library.com/images/html5-icon/html5-icon-7.jpg",
  },
  {
    name: "Javascript",
    icon: "https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg",
  },
  {
    name: "Css",
    icon: "https://icon-library.com/images/css3-icon/css3-icon-28.jpg",
  },
  {
    name: "Angular",
    icon: "https://icon-library.com/images/angularjs-icon/angularjs-icon-10.jpg",
  },
  {
    name: "Bootstrap",
    icon: "https://icon-library.com/images/bootstrap-icon-png/bootstrap-icon-png-10.jpg",
  },
  {
    name: "Typescript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
  },
  {
    name: "MySql",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLIsoAHea-BOhRzeFAqp8P9OChYR2Fch6mQ&s",
  },
  {
    name: "PostgreSql",
    icon: "https://icon-library.com/images/postgresql-icon/postgresql-icon-7.jpg",
  },
  {
    name: "Firebase",
    icon: "https://www.gstatic.com/devrel-devsite/prod/vf0eb6f8ebad49d1e3523c3ee6bef7563a09624802753ccc3d816c9b276e850fd/firebase/images/touchicon-180.png",
  },
  {
    name: "React Native",
    icon: "https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png",
  },
  {
    name: "Next Js",
    icon: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
  },
  {
    name: "Tailwind",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png",
  },
  {
    name: "Php",
    icon: "https://cdn-icons-png.flaticon.com/128/5968/5968332.png",
  },
];

export const linksRedirect = (url, msg) => {
  const lng = dynamicText(msg);
  !url ? toast.error(lng.toastErr) : window.open(url, "_blank");
};
