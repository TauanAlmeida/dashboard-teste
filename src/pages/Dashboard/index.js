import React, { useState } from "react";

import {
  Button,
  Typography,
  Grid,
  IconButton,
  makeStyles,
  Container,
  Box,
  InputBase,
  Paper,
  Avatar,
  Divider,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import Menu from "../../components/Menu";
import PhotoPerfil from "../../assets/Perfil.png";
import CardFaturamento from "../../components/CardFaturamento";
import LineChart from "../../components/lineChart";
import Barchart from "../../components/BarChart";
import CardChart from "../../components/CardChart";
import HorizontalBarChart from "../../components/HorizontalBarChart";
import HorizontalBarChart2 from "../../components/HorizontalBarChart2";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import ModalFilterData from "../../components/ModalFilterData";
import Tooltip from "@material-ui/core/Tooltip";

function Dashboard({ toggleTheme, themeMode }) {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  function handleModeLayout(theme) {
    if (theme === "light") {
      return <Brightness4Icon className={classes.themeMode} />;
    } else {
      return <Brightness7Icon className={classes.themeMode} />;
    }
  }
  return (
    <div className={classes.root}>
      <ModalFilterData
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
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
                  <Divider className={classes.divider} orientation="vertical" />
                  <Tooltip title="Filtro" aria-label="Filtro">
                    <IconButton
                      color="primary"
                      className={classes.iconButton}
                      aria-label="directions"
                      onClick={handleClickOpen}
                    >
                      <FilterListIcon />
                    </IconButton>
                  </Tooltip>
                </Paper>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
              >
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography component="span" color="textPrimary">
                    Remy Sharp
                  </Typography>
                  <Avatar alt="Remy Sharp" src={PhotoPerfil} />
                  <ExpandMoreIcon className={classes.notifyIcon} />
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                  mx={1}
                >
                  <Tooltip title="Notificações" aria-label="Notificações">
                    <NotificationsIcon className={classes.notifyIcon} />
                  </Tooltip>
                  <span className={classes.notifyCircle}></span>
                </Box>
                <Tooltip title="Dark/Light" aria-label="Dark/Light">
                  <Button onClick={toggleTheme}>
                    {handleModeLayout(themeMode)}
                  </Button>
                </Tooltip>
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

          <CardFaturamento
            titulo="Margem de contruibuição"
            valor="R$ 539.515,11"
            percent="45,3"
          />
        </section>
        <Grid
          className="mb-3"
          container
          spacing={3}
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item sm={12} md={7} lg={7}>
            <CardChart titulo="Faturamento bruto">
              <Barchart />
            </CardChart>
          </Grid>
          <Grid item sm={12} md={5} lg={5}>
            <CardChart>
              <LineChart />
            </CardChart>
          </Grid>
        </Grid>
        <Grid
          className="mb-3"
          container
          spacing={3}
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item sm={12} md={7} lg={6}>
            <CardChart titulo="Vendas por meio de pagamento">
              <HorizontalBarChart />
            </CardChart>
          </Grid>
          <Grid item sm={12} md={5} lg={6}>
            <CardChart titulo="Top 5 Vendas por vendedor">
              <HorizontalBarChart2 />
            </CardChart>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    height: "auto",
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
  themeMode: {
    color: theme.palette.primary.main,
  },
}));

export default Dashboard;
