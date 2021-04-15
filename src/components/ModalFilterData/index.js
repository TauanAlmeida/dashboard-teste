import React from "react";

import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import makeStyles from "@material-ui/core/styles/makeStyles";

import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function ModalFilterData(props) {
  const { onClose, selectedValue, open } = props;
  const classes = useStyles();
  const [year, setYear] = React.useState("");
  const [month, setMonth] = React.useState("");

  const handleChange = (event) => {
    setYear(Number(event.target.value) || "");
  };

  const handleChangeMonth = (event) => {
    setMonth(event.target.value || "");
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Filter por:</DialogTitle>
      <DialogContent>
        <form className={classes.container}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-dialog-native">Ano</InputLabel>
            <Select
              native
              value={year}
              onChange={handleChange}
              input={<Input id="demo-dialog-native" />}
            >
              <option aria-label="None" value="" />
              <option value={2018}>2018</option>
              <option value={2019}>2019</option>
              <option value={2020}>2020</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-dialog-select-label">Mês</InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={month}
              onChange={handleChangeMonth}
              input={<Input />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Janeiro"}>Janeiro</MenuItem>
              <MenuItem value={"Fevereiro"}>Fervereiro</MenuItem>
              <MenuItem value={"Março"}>Março</MenuItem>
              <MenuItem value={"Abril"}>Abril</MenuItem>
              <MenuItem value={"Maio"}>Maio</MenuItem>
              <MenuItem value={"Junho"}>Junho</MenuItem>
              <MenuItem value={"Julho"}>Julho</MenuItem>
              <MenuItem value={"Agosto"}>Agosto</MenuItem>
              <MenuItem value={"Setembro"}>Setembro</MenuItem>
              <MenuItem value={"Outubro"}>Outubro</MenuItem>
              <MenuItem value={"Novembro"}>Novembro</MenuItem>
              <MenuItem value={"Dezembro"}>Dezembro</MenuItem>
            </Select>
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalFilterData;
