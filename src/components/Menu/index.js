import React from "react";
import Logo from "../../assets/logo.png";
import { makeStyles, Container, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

function Menu({ toggleTheme }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <nav className={classes.menu}>
      <Container>
        <div className={classes.header}>
          <img src={Logo} alt="logo" />
        </div>
        <Button onClick={toggleTheme}>Theme</Button>
      </Container>
    </nav>
  );
}

const useStyles = makeStyles((theme) => ({
  menu: {
    background: theme.palette.backgroundPrimary,
    minWidth: 250,
    height: "100%",
  },
  header: {
    width: "100%",
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default Menu;
