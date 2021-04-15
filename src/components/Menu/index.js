import React from "react";
import Adsoft from "../../assets/adsoft2.png";
import { makeStyles, Box, Typography, Divider } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import BarChartIcon from "@material-ui/icons/BarChart";

function Menu({ toggleTheme }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box component="nav" className={classes.menu} position="relative">
      <Box display="flex" flexDirection="column">
        <div className={classes.header}>
          <img src={Adsoft} alt="logo" />
        </div>
      </Box>
      <Divider absolute={true} variant="fullWidth" orientation="horizontal" />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
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
    marginLeft: 15,
    color: theme.palette.primary.main,
    marginRight: 15,
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
