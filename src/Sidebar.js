import React from "react";
import "./Sidebar.css";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import { TbSteeringWheel } from "react-icons/tb";
import { BiWalletAlt, BiSolidOffer } from "react-icons/bi";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

function Sidebar() {
  return (
    <div>
      <aside>
        <section className="sider-section">
          <div className="headcontent">
            <SettingsOutlinedIcon className="icon" />
            <h2>Dashboard</h2>
          </div>

          <div className="subcontent">
            <KeyOutlinedIcon className="icon" />
            <p>Dashboard</p>
          </div>

          <div className="subcontent">
            <TbSteeringWheel className="icon" />
            <p>Product</p>
            <NavigateNextOutlinedIcon className="sidearrowicon" />
          </div>

          <div className="subcontent">
            <AccountBoxOutlinedIcon className="icon" />
            <p>Customers</p>
            <NavigateNextOutlinedIcon className="sidearrowicon" />
          </div>

          <div className="subcontent">
            <BiWalletAlt className="icon" />
            <p>Income</p>
            <NavigateNextOutlinedIcon className="sidearrowicon" />
          </div>

          <div className="subcontent">
            <BiSolidOffer className="icon" />
            <p>Promote</p>
            <NavigateNextOutlinedIcon className="sidearrowicon" />
          </div>

          <div className="subcontent">
            <LiveHelpOutlinedIcon className="icon" />
            <p>Help</p>
            <NavigateNextOutlinedIcon className="sidearrowicon" />
          </div>
          <div className="subcontent2">
            <Stack>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </Stack>
            <div className="details">
              <b>Evano</b>
              <p>Project Manager</p>
            </div>
            <KeyboardArrowDownOutlinedIcon />
          </div>
        </section>
      </aside>
    </div>
  );
}

export default Sidebar;
