import { Box, Typography } from "@mui/material";

function Header({ title, subtitle }) {
  return (
    <Box mb="10px"
    >
      <Typography variant="h4" fontWeight="600">
        {title}
      </Typography>
      <Typography variant="h8" fontWeight="600">
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;
