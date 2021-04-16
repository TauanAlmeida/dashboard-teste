import React from "react";
import Adsoft from "../../assets/adsoft2.png";
import { makeStyles, Box, Divider, Tooltip, Button } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import BarChartIcon from "@material-ui/icons/BarChart";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import StoreMallDirectoryRoundedIcon from "@material-ui/icons/StoreMallDirectoryRounded";
function Menu({ toggleTheme }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box component="nav" className={classes.menu} position="relative">
      <Box display="flex" mb={8} flexDirection="column">
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
        mb={3}
      >
        <Tooltip title="Home" aria-label="Home" placement="end">
          <Button fullWidth={true}>
            <HomeRoundedIcon className={classes.iconDisabled} />
          </Button>
        </Tooltip>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        className={classes.menuItemActive}
        borderLeft={4}
        mb={3}
      >
        <Tooltip title="Faturamento" aria-label="Faturamento" placement="end">
          <Button fullWidth={true}>
            <BarChartIcon className={classes.iconActive} />
          </Button>
        </Tooltip>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        className={classes.menuItemActive}
        mb={3}
      >
        <Tooltip title="Loja" aria-label="Loja" placement="end">
          <Button fullWidth={true}>
            <StoreMallDirectoryRoundedIcon className={classes.iconDisabled} />
          </Button>
        </Tooltip>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        className={classes.menuItemActive}
        mb={3}
      >
        <Tooltip title="Clientes" aria-label="Clientes" placement="end">
          <Button fullWidth={true}>
            <GroupRoundedIcon className={classes.iconDisabled} />
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  menu: {
    background: theme.palette.backgroundPrimary,
    minWidth: 80,
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
  iconDisabled: {
    marginLeft: 15,
    color: "#979797",
    marginRight: 15,
  },
  menuItem: {
    width: "100%",
    height: 35,
    "&:hover": {
      backgroundColor: "rgba(79, 79, 79, 0.04)",
    },
  },
  menuItemActive: {
    borderLeftWidth: 5,
    borderLeftColor: theme.palette.primary.main,
    width: "100%",
    height: 35,
    "&:hover": {
      backgroundColor: "rgba(79, 79, 79, 0.04)",
    },
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
