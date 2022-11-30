import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { columns, rows } from "./mockTeamData.js";

function Team() {
  const theme = useTheme();
  return (
    <Box m="0px 20px 0px 20px">
      <Header title="TEAM" subtitle="Managing the team members" />
      <Box
        sx={{
          height: "75vh",
          width: "100%",
          "& .MuiDataGrid-footerContainer": {
          backgroundColor: `${theme.palette.primary.dark}`,
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: `${theme.palette.primary.dark}`,
          },
          "& .MuiButton-root:hover": {
            backgroundColor: `${theme.palette.primary.light}`,
          },
          "& .MuiButton-root": {
            backgroundColor: `${theme.palette.primary.light}`,
          },
          "& .MuiButton-root": {
            color: `${theme.palette.text.primary}`,
          },
        }}
      >
        <DataGrid
          sx={{border: 0 }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}
export default Team;
