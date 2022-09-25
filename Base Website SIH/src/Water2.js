import React from "react";
import {useState} from "react";
import Water from './Water'

const Water2 = (props) => {
    return(
        (props.toDisplay=="Water2") && 
        <div className = {props.wname}>
        {props.wname == "red" ?
        <div>
            <div className="midsquare" style={{ padding: "10%"}}>
          <Water name='redTemp'/>
            </div>

            <div style={{margin: 'auto'}}>
            <h2>Solution: </h2>
         <h3>
            <ul> Start irrigation pump immediately</ul>
          </h3>
            </div>
        </div> :
        <div className="midsquare" style={{ padding: "10%"}}>
          <Water name='greenTemp'/>
            </div>}
      </div>
    );
}

export default Water2;