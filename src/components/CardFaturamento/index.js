import React from "react";
import {
  Box,
  Typography,
  makeStyles,
  useTheme,
  Container,
} from "@material-ui/core";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
function CardFaturamento({ titulo, valor, percent }) {
  const theme = useTheme();

  const handlePercentage = (valor) => {
    if (valor > "0") {
      return (
        <>
          {valor}%
          <ArrowUpwardRoundedIcon color="primary" />
        </>
      );
    } else {
      return (
        <>
          {valor}%
          <ArrowDownwardRoundedIcon color="secondary" />
        </>
      );
    }
  };

  const classes = useStyles(theme);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="space-between"
      p={2}
      m={1}
      className={classes.container}
    >
      {console.log(theme)}
      <Typography className="title" variant="h6" color="textPrimary">
        {titulo}
      </Typography>
      <Box
        display="flex"
        alignItems="space-between"
        justifyContent="space-between"
        width="100%"
      >
        <Typography
          component="span"
          color="textPrimary"
          className="fontWeightMedium"
        >
          {valor}
        </Typography>
        <Typography
          component="span"
          color="textSecondary"
          className={classes.percent}
        >
          {handlePercentage(percent)}
        </Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.backgroundPrimary,
    borderRadius: 5,
    height: 120,
    minWidth: 250,
  },
  percent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default CardFaturamento;
