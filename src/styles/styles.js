export function getStyles() {
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
    avatar: {
      width: 300,
      height: 300,
      borderRadius: "50%",
      aspectRatio:'16/9'
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
      height: 250,
      width: 150,
      backgroundColor: "white",
      margin: 5,
    },
    actionsBox: {},
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
