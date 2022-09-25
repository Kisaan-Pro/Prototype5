import React from "react";
import './Temperature.css';
import {useState} from "react";


const Water = (props) => {
console.log(props)
const [W, setW] = useState(0);



return(<div className = {props.name}>

{props.name == 'redTemp' ? <div><img src="./warningSign.svg" class = "redImg"/> 
<h3>The Soil is Dry.</h3></div> : <div> <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg" class = "redImg"/> <h3> Water Level is appropiate</h3></div>}

</div>
);}


export default Water;
