import React from "react";
import './Temperature.css';
import {useState} from "react";


const Humidity = (props) => {
console.log(props)
const [H, setH] = useState(0);



return(<div className = {props.name}>

{props.name == 'redTemp' ? <div><img src="./warningSign.svg" class = "redImg"/> 
<h3>Humidity is extremely high. May have adverse effect on crop.</h3></div> : <div> <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg" class = "redImg"/> <h3> Humidity Level is appropiate</h3></div>}

</div>
);}


export default Humidity;
