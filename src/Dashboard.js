import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
import Sidebar from "./Sidebar";
import Cards from "./Cards";
import BarCharts from "./Charts/BarChart";
import TwoSimplePieChart from "./Charts/PieChart";
import Hello from "./Hello";
import AccessibleTable from "./Table";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import Divider from "@mui/material/Divider";
// import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
// import { TbSteeringWheel } from "react-icons/tb";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{ marginTop: -2 }}>
          <Sidebar />
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "lightgray", p: 3 }}>
        <Hello />
        <Cards />
        <div className="charts">
          <BarCharts />
          <TwoSimplePieChart />
        </div>
        <AccessibleTable />
      </Box>
    </Box>
  );
}
