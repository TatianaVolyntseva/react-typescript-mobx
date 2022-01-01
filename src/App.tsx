import * as React from "react";
import {experimentalStyled as styled} from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./App.css";
import {ICoin} from "./interfacece";
import ConvertorApp from "./components/ConvertorApp";
import TableApp from "./components/TableApp";
import currency from "./store/currency";
import {observer} from "mobx-react-lite";

const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const App: React.FC = observer(() => {

  React.useEffect(() => {
    currency.getCarrencyFromApi();
  }, []);

  console.log("---render", JSON.parse(JSON.stringify(currency.currency)));
  return (
    <Container maxWidth="xl">
      <Box sx={{p: 2, marginTop: "50px"}}>
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Item elevation={8}>
              <TableApp />
            </Item>
          </Grid>
          <Grid item xs={5}>
            <ConvertorApp />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
});

export default App;
