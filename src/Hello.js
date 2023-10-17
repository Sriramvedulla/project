import React from "react";
import { PiHandWavingThin } from "react-icons/pi";
import { FormGroup, Input } from "reactstrap";
import "./Hello.css";

function Hello() {
  return (
    <div>
      <div className="shah">
        <h3 className="hi">
          Hello Shahrukh
          <PiHandWavingThin style={{ color: "sandybrown" }} />,
        </h3>
        <FormGroup>
          <Input
            id="exampleSearch"
            name="search"
            placeholder="Search"
            type="search"
          />
        </FormGroup>
      </div>
    </div>
  );
}

export default Hello;
