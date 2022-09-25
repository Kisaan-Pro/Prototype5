import React from "react";
import './Temperature.css';
import {useState} from "react";

// function Temperature(){
//     return(
//         <div className = "redTemp">
//         </div>
//     );
// }



const Temperature = (props) => {
console.log(props)
const [T, setT] = useState(0);



return(<div className = {props.name}>

{props.name == 'redTemp' ? <div><img src="./warningSign.svg" class = "redImg"/> 
<h3>The Temperature is dangerously high</h3></div> : <div> <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg" class = "redImg"/> <h3> Temperature is appropiate</h3></div>}

</div>

);}


export default Temperature;
