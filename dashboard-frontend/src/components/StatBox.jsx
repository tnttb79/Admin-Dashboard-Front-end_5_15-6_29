import React from "react";
import { Box, Typography } from "@mui/material";
import ProgressCirCle from "./ProgressCircle";

function StatBox({ pct, size, icon, number, text, up }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      border="solid"
      borderRadius="10px"
      p="10px"
      height="100%"
    >
      <Box display="flex" flexDirection="column">
        {icon}
        <Typography variant="h8" fontWeight="500">{number}</Typography>
        <Typography variant="h6" fontWeight="600">{text}</Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <ProgressCirCle pct={pct} size={size} />
        <Typography sx={{ fontStyle: "italic", fontSize:"12px" }}>{`+${up}%`}</Typography>
      </Box>
    </Box>
  );
}

export default StatBox;
