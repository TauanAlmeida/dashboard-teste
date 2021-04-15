import React from "react";
import Logo from "../../assets/logo.png";
import {
  makeStyles,
  Container,
  Button,
  Box,
  Typography,
  Divider,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import BarChartIcon from "@material-ui/icons/BarChart";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

function Menu({ toggleTheme }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  function handleModeLayout(theme) {
    if (theme === "light") {
      return <Brightness4Icon className={classes.iconMode} />;
    } else {
      return <Brightness7Icon className={classes.iconMode} />;
    }
  }
  return (
    <Box component="nav" className={classes.menu} position="relative">
      <Box display="flex" flexDirection="column">
        <div className={classes.header}>
          <img src={Logo} alt="logo" />
        </div>
      </Box>
      <Divider absolute={true} variant="fullWidth" orientation="horizontal" />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={classes.menuItemActive}
        borderLeft={4}
      >
        <BarChartIcon className={classes.iconActive} />
        <Typography component="span" color="primary">
          Faturamento
        </Typography>
      </Box>

      {/*       <Box
        p={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        position="absolute"
        className={classes.pullBottom}
      >
        <Typography omponent="span" color="primary">
          Tema
        </Typography>
        <Button onClick={toggleTheme}>
          {handleModeLayout(theme.palette.type)}
        </Button>
      </Box> */}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  menu: {
    background: theme.palette.backgroundPrimary,
    minWidth: 250,
    minHeight: "100vh",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconActive: {
    color: theme.palette.primary.main,
  },
  menuItemActive: {
    borderLeftWidth: 5,
    borderLeftColor: theme.palette.primary.main,
    width: "100%",
    height: 35,
  },
  iconMode: {
    color: theme.palette.primary.main,
  },
  pullBottom: {
    bottom: 15,
    right: 0,
    left: 0,
  },
}));

export default Menu;
