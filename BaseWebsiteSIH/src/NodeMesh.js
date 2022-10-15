import React from "react";
import {useState} from "react";
import Temperature from './Temperature'

const NodeMesh = (props) => {
    return(
         (props.toDisplay=="NodeMesh") &&
        <div>
            <img src="./nodemesh.PNG"></img>
      </div>
    );
}

export default NodeMesh;