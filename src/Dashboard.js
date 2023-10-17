import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Sidebar from "./Sidebar";
import Cards from "./Cards";
import BarCharts from "./Charts/BarChart";
import TwoSimplePieChart from "./Charts/PieChart";
import Hello from "./Hello";
import AccessibleTable from "./Table";

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
        <List>
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
