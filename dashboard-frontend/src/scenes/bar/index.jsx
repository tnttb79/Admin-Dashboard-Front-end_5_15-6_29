import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import barData from "./barData";

const Bar = () => {
  return (
    <Box m="0px 20px 0px 20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart data={barData} />
      </Box>
    </Box>
  );
};

export default Bar;
