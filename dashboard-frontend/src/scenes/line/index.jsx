import LineChart from "../../components/LineChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import data from "./lineChartData";
const Line = () => (
  <Box m="0px 20px 0px 20px">
    <Header title="Line Chart" subtitle="Simple Line Chart" />
    <Box height="75vh">
      <LineChart data={data} />
    </Box>
  </Box>
);

export default Line;
