export function getNavbarStyles() {
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
      marginRight: "10px",
    },
    navbarLink: {
      color: "white",
      textDecoration: "none",
    },
  };
}
