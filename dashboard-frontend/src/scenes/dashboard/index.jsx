import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import RevenueCard from "./RevenueCard";
import TransCard from "./TransCard";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BarChart from "../../components/BarChart";
import barData from "../bar/barData.js";
import GeoChart from "../../components/GeoChart";
import geoData from "../geography/geoData.js";
import features from "../geography/Features";

function Dashboard() {
  return (
    <Box m="0px 20px 0px 20px">
      <Header title="Dashboard" subtitle="Welcome to the Admin Dashboard" />
      <Box
        display="grid"
        gridTemplateColumns="repeat(8, 1fr)"
        gridTemplateRows="repeat(5, 20%)"
        gap="1rem"
      >
        {/* First Row */}
        <Box gridColumn="span 2">
          <StatBox
            pct={54}
            size={70}
            icon={<PointOfSaleIcon sx={{ fontSize: "32px" }} />}
            number={6116}
            text="Total Transactions"
            up={16}
          />
        </Box>
        <Box gridColumn="span 2">
          <StatBox
            pct={62}
            size={70}
            icon={<PersonAddIcon sx={{ fontSize: "32px" }} />}
            number={723}
            text="Total Clients"
            up={10}
          />
        </Box>
        <Box gridColumn="span 2">
          <StatBox
            pct={45}
            size={70}
            icon={<EmailIcon sx={{ fontSize: "32px" }} />}
            number={3726}
            text="Total Emails"
            up={9}
          />
        </Box>
        <Box gridColumn="span 2">
          <StatBox
            pct={77}
            size={70}
            icon={<MonetizationOnIcon sx={{ fontSize: "32px" }} />}
            number="16,511,468"
            text="Revenue"
            up={12}
          />
        </Box>

        {/* Second Row */}
        <Box sx={{ p: "0" }} gridColumn="span 6" gridRow="span 2">
          <RevenueCard />
        </Box>

        <TransCard />

        {/* Third Row */}
        <Box
          sx={{ border: "solid", borderRadius: "10px", p: "10px" }}
          gridColumn="span 4"
          gridRow="span 2"
        >
          <Typography variant="h6" fontWeight="600">
            Sales Quantity
          </Typography>
          <Box height="250px" mt="20px">
            <BarChart data={barData} isDashboard={true} />
          </Box>
        </Box>

        <Box
          sx={{ border: "solid", borderRadius: "10px", p: "10px" }}
          gridColumn="span 2"
          gridRow="span 2"
        >
          <Typography variant="h6" fontWeight="600">
            Sales Geography
          </Typography>
          
          <Box height="250px" mt="20px">
            <GeoChart features={features} data={geoData} isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Dashboard;
