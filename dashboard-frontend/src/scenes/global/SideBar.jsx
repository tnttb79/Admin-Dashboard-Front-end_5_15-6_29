import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

function SideBar() {
  const { collapseSidebar } = useProSidebar();
  const theme = useTheme();
  return (
    <Sidebar
      rootStyles={{ height: "100vh", display: "flex", borderColor: `${theme.palette.primary.dark}` }}
      backgroundColor={theme.palette.primary.dark}
    >
      <Menu
        menuItemStyles={{
          button: {
            "&:hover": {
                backgroundColor: `${theme.palette.primary.main}`},
            "&.active": {
              backgroundColor: `${theme.palette.primary.main}`,
              color: "#b6c8d9",
              "&:hover": {
                backgroundColor: `${theme.palette.primary.main}`,
              },
            },
            height:"6.6vh"
          },
        }}
      >
        <MenuItem
          icon={<MenuOutlinedIcon />}
          style={{ textAlign: "center" }}
          onClick={() => {
            collapseSidebar();
          }}
        >
          <h2>Admin</h2>
        </MenuItem>
        <MenuItem icon={<HomeOutlinedIcon />} component={<NavLink to="/" />}>
          Home
        </MenuItem>
        <MenuItem
          icon={<PeopleOutlinedIcon />}
          component={<NavLink to="/team" />}
        >
          Team
        </MenuItem>
        <MenuItem
          icon={<ContactsOutlinedIcon />}
          component={<NavLink to="/contacts" />}
        >
          Contacts
        </MenuItem>
        <MenuItem
          icon={<ReceiptOutlinedIcon />}
          component={<NavLink to="/invoices" />}
        >
          Invoices
        </MenuItem>
        <MenuItem
          icon={<PersonOutlinedIcon />}
          component={<NavLink to="/form" />}
        >
          Profile
        </MenuItem>
        <MenuItem
          icon={<CalendarTodayOutlinedIcon />}
          component={<NavLink to="/calendar" />}
        >
          Calendar
        </MenuItem>
        <MenuItem
          icon={<HelpOutlineOutlinedIcon />}
          component={<NavLink to="/faq" />}
        >
          FAQ
        </MenuItem>
        <MenuItem
          icon={<BarChartOutlinedIcon />}
          component={<NavLink to="/bar" />}
        >
          Bar Chart
        </MenuItem>
        <MenuItem
          icon={<PieChartOutlineOutlinedIcon />}
          component={<NavLink to="/pie" />}
        >
          Pie Chart
        </MenuItem>
        <MenuItem
          icon={<TimelineOutlinedIcon />}
          component={<NavLink to="/line" />}
        >
          {" "}
          Line Chart
        </MenuItem>
        <MenuItem
          icon={<MapOutlinedIcon />}
          component={<NavLink to="/geography" />}
        >
          Geography Chart
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SideBar;
