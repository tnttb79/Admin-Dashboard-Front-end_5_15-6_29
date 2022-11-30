import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../components/LineChart";
import data from "../line/lineChartData.js";

function RevenueCard() {
  return (
    <Box border="solid" borderRadius="10px" height="100%" p="10px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h6" fontWeight="600">
            Revenue Generated
          </Typography>
          <Typography >
            $61,061,079
          </Typography>
        </Box>
        <IconButton>
          <DownloadOutlinedIcon sx={{ fontSize: "40px", mr:"60px"}} />
        </IconButton>
      </Box>
      <Box height="250px" m="-20px 0 0 0">
        <LineChart isDashboard={true} data={data} />
      </Box>
    </Box>
  );
}

export default RevenueCard;
