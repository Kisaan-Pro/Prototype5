import React from "react";
import {useState} from "react";
import Temperature from './Temperature'

const Temperature2 = (props) => {
    return(
         (props.toDisplay=="Temperature2") && 
        <div className = {props.wname}>
        {props.wname == "red" ?
        <div>
            <div className="midsquare" style={{ padding: "10%"}}>
          <Temperature name='redTemp'/>
            </div>

            <div style={{margin: 'auto'}}>
          <h2>Solution Suggested: </h2>
<h3>
            <ul> Perform light irrigation</ul>
            <ul> Use shade and covers</ul>
          </h3>
            </div>
        </div> :
        <div className="midsquare" style={{ padding: "10%"}}>
          <Temperature name='greenTemp'/>
            </div>}
      </div>
    );
}

export default Temperature2;

// import React from "react";
// import {useState} from "react";
// import Temperature from './Temperature'

// const Temperature2 = (props) => {
//      return(
//         {if (props.toDisplay == "Temperature2")} &&
//         <div className = {props.wname}>
//         {props.wname == "red" ?
//         <div>
//             <div className="midsquare" style={{ padding: "10%"}}>
//           <Temperature name='redTemp'/>
//             </div>

//             <div style={{margin: 'auto'}}>
//           <h2>Solution Suggested: </h2>
//           <h3>
//             <ul> Perform light irrigation</ul>
//             <ul> Use shade and covers</ul>
//           </h3>
//             </div>
//         </div> :
//         <div className="midsquare" style={{ padding: "10%"}}>
//           <Temperature name='greenTemp'/>
//             </div>}
//       </div>
//     );
// }

// export default Temperature2;