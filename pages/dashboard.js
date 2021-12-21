import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import DoughnutChart from "../components/Doughnut";
import Points from "../components/Points";
import TopProducts from "../components/TopProducts";
import Badges from '../components/Badges'

export default function Dashboard() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ width: "80%", marginLeft: "10%", marginTop: "100px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <TopProducts />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Points />
            </Item>
          </Grid>

          <Grid item xs={12}>
            <Item>Lorem ipsum</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Badges />
            </Item>
          </Grid>
        
        <Grid item xs={6}>
          <Item>
            <DoughnutChart />
          </Item>
        </Grid>
        </Grid>
      </Box>
    </>
  );
}
