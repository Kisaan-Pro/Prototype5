import React from "react";
import { useState } from "react";
import Temperature from "./Temperature";

const NodeMesh = (props) => {
  return (
    props.toDisplay == "NodeMesh" && (
      <div className={props.wname}>
        {props.wname == "red" ? (
          <div>
            <div className="midsquare" style={{ padding: "10%" }}>
              <Temperature name="redTemp" />
            </div>

            <div style={{ margin: "auto" }}>
              <h2>Solution Suggested: </h2>
              <br></br>
              <h5>
                <ul> Perform light irrigation</ul>
                <ul> Use shade and covers</ul>
              </h5>
            </div>
          </div>
        ) : (
          <div className="midsquare" style={{ padding: "10%" }}>
            <Temperature name="greenTemp" />
          </div>
        )}
      </div>
    )
  );
};

export default NodeMesh;
