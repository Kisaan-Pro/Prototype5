import React from "react";
import {useState} from "react";
import Humidity from './Humidity'

const Humidity2 = (props) => {
    return(
        (props.toDisplay=="Humidity2") &&
        <div className = {props.wname}>
        {props.wname == "red" ?
        <div>
            <div className="midsquare" style={{ padding: "10%"}}>
          <Humidity name='redTemp'/>
            </div>

            <div style={{margin: 'auto'}}>
            </div>
        </div> :
        <div className="midsquare" style={{ padding: "10%"}}>
          <Humidity name='greenTemp'/>
            </div>}
      </div>
    );
}

export default Humidity2;