import React from "react";
import { Box, Typography } from "@mui/material";
import mockTransactions from "./mockTransactionData.js";

function TransCard() {
  return (
    <Box
      sx={{ border: "solid", borderRadius: "10px", p: "0" }}
      gridColumn="7/9"
      gridRow="2/6"
    >
      <Box
        display="flex"
        justifyContent="start"
        borderBottom="solid"
        px="10px"
        py="3px"
      >
        <Typography variant="h6" fontWeight="600">
          Recent Transactions
        </Typography>
      </Box>
      <Box overflow="auto" height="620px" px="10px">
        {mockTransactions.map((transaction) => (
          <Box
            key={transaction.txId}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="6px"
          >
            <Box>
              <Box fontWeight="bold">{transaction.user}</Box>
              <Box fontWeight="200">{transaction.txId}</Box>
            </Box>
            <Box fontWeight="200">{transaction.date}</Box>
            <Box
              backgroundColor="#297373"
              borderRadius="10px"
              fontWeight="200"
              p="4px"
              color="#CED4DA"
            >
              {transaction.cost}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default TransCard;
