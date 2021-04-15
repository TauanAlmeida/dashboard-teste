import React from "react";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  IconButton,
  MenuIcon,
  makeStyles,
  Container,
  Box,
  InputBase,
  withStyles,
  fade,
  Paper,
  InputAdornment,
  Avatar,
} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import Menu from "../../components/Menu";
import PhotoPerfil from "../../assets/Perfil.png";
import CardFaturamento from "../../components/CardFaturamento";
import { useTheme } from "@material-ui/core/styles";
function Dashboard({ toggleTheme, themeMode }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const theme = useTheme();
  return (
    <div className={classes.root}>
      <Menu toggleTheme={toggleTheme} />
      <Container className="overflowHidden">
        <Grid container>
          <Grid item sm={12} md={12} lg={12} className={classes.dashboard}>
            <Box
              mt={2}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                variant="h5"
                color="textPrimary"
                className="fontWeightBold"
              >
                Análise de faturamento
              </Typography>
              <Box display="flex">
                <Paper
                  component="form"
                  elevation={0}
                  className={classes.inputSearch}
                >
                  <InputBase
                    className={classes.input}
                    placeholder="Buscar"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                  <IconButton
                    type="submit"
                    className={classes.iconButton}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
                <Box
                  mx={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                >
                  <NotificationsIcon className={classes.notifyIcon} />
                  <span className={classes.notifyCircle}></span>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Typography component="span" color="textPrimary">
                  Remy Sharp
                </Typography>
                <Avatar alt="Remy Sharp" src={PhotoPerfil} />
                <ExpandMoreIcon className={classes.notifyIcon} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <section className="marginTop cardWrapper" container>
          <CardFaturamento
            titulo="Faturamento bruto"
            valor="R$ 183,692,00"
            percent="-1,5"
          />

          <CardFaturamento
            titulo="QNTDE. Compradores"
            valor="3.520"
            percent="2,5"
          />

          <CardFaturamento
            titulo="Ticket médio"
            valor="518,09"
            percent="-1,5"
          />

          <CardFaturamento titulo="CMV" valor="R$ 1.260.561,00" percent="3,3" />

          <CardFaturamento titulo="CMV" valor="R$ 1.260.561,00" percent="3,3" />
        </section>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    background: theme.palette.backgroundSecondary,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  icon: {
    color: "white",
  },
  dashboard: {
    height: "100%",
    width: "100%",
  },
  inputSearch: {
    padding: "2px 2px",
    display: "flex",
    alignItems: "center",
    width: 250,
    height: 35,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  notifyIcon: {
    color: "#979797",
  },
  notifyCircle: {
    position: "absolute",
    right: 5,
    top: 5,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.backgroundPrimary,
    borderWidth: 1,
  },
}));

export default Dashboard;
