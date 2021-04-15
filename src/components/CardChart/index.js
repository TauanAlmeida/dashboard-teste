import React from "react";
import { Box, useTheme, makeStyles, Typography } from "@material-ui/core";

function CardChart({ children, titulo }) {
  const theme = useTheme();
  const classes = useStyles(theme, titulo);
  return (
    <Box
      p={3}
      className={classes.container}
      style={{ justifyContent: titulo ? "space-between" : "center" }}
    >
      {titulo && (
        <Typography className="fontWeightBold" variant="h6" color="textPrimary">
          {titulo}
        </Typography>
      )}

      {children}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.backgroundPrimary,
    minHeight: 200,
    height: 200,
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
  },
}));

export default CardChart;
