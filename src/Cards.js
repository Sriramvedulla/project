import React from "react";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import {
  BiUpArrowAlt,
  BiDownArrowAlt,
  BiWalletAlt,
  BiShoppingBag,
} from "react-icons/bi";
import { GrDocumentText } from "react-icons/gr";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="mapdata">
        <div className="iconimg">
          <CurrencyExchangeOutlinedIcon className="dataimg" />
        </div>
        <div className="earnings">
          <p>Earnings</p>
          <h2>$198k</h2>
          <p>
            <BiUpArrowAlt className="arrowicon" />
            37.8% this month
          </p>
        </div>
      </div>

      <div className="mapdata">
        <div className="iconimg2">
          <GrDocumentText className="dataimg2" />
        </div>
        <div className="earnings">
          <p>Orders</p>
          <h2>$2.4k</h2>
          <p>
            <BiDownArrowAlt />
            2% this month
          </p>
        </div>
      </div>

      <div className="mapdata">
        <div className="iconimg3">
          <BiWalletAlt className="dataimg3" />
        </div>
        <div className="earnings">
          <p>Balance</p>
          <h2>$2.4k</h2>
          <p>
            <BiDownArrowAlt />
            2% this month
          </p>
        </div>
      </div>

      <div className="mapdata">
        <div className="iconimg4">
          <BiShoppingBag className="dataimg4" />
        </div>
        <div className="earnings">
          <p>Balance</p>
          <h2>$2.4k</h2>
          <p>
            <BiUpArrowAlt className="arrowicon" />
            2% this month
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
