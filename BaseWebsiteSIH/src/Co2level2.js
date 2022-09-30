import React from "react";
import {useState} from "react";
import Co2level from './Co2level'

const Co2level2 = (props) => {
    return(
        (props.toDisplay=="Co2level2") &&
        <div className = {props.wname}>
        {props.wname == "red" ?
        <div>
            <div className="midsquare" style={{ padding: "10%"}}>
          <Co2level name='redTemp'/>
            </div>

            <div style={{margin: 'auto'}}>
            </div>
        </div> :
        <div className="midsquare" style={{ padding: "10%"}}>
          <Co2level name='greenTemp'/>
            </div>}
      </div>
    );
}

export default Co2level2;