import * as React from "react";
import {experimentalStyled as styled} from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import {observer} from "mobx-react-lite";
import currency from "../store/currency";

const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ConvertorApp = observer(() => {
  const [age, setAge] = React.useState("");
  let listCurrency: string[] = [];
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  if (JSON.parse(JSON.stringify(currency.currency)).length > 0) {
    listCurrency = currency.returnListCurrency();
  }

  return (
    <Item elevation={5}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "baseLine",
        }}
      >
        <TextField
          id="standard-basic"
          label="Сумма"
          variant="standard"
          size="small"
        />
        <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
          <InputLabel id="demo-simple-select-standard-label">Валюта</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            {listCurrency.map((currency) => {
              return (
                <MenuItem value={currency} key={currency}>
                  <em>{currency}</em>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "baseLine",
        }}
      >
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          size="small"
        />
        <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <h3>77.81 Российский рубль </h3>
    </Item>
  );
});

export default ConvertorApp;
