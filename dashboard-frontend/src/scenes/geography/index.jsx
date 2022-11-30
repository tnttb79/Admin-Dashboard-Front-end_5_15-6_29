import GeoChart from "../../components/GeoChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import features from "./Features";
import geoData from "./geoData";

const Geo = () => (
  <Box m="0px 20px 0px 20px">
    <Header title="Geo Chart" subtitle="Simple Geo Chart" />
    <Box height="75vh" border="solid" borderRadius='10px'>
      <GeoChart features={features} data={geoData} />
    </Box>
  </Box>
);

export default Geo;
