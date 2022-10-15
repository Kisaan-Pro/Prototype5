import "./App.css";
import React from "react";
import Pro_logo from "./image/Pro_logo.svg";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import {
  Rectangle,
  Circle,
  Ellipse,
  Line,
  Polyline,
  CornerBox,
  Triangle,
} from "react-shapes";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import { borderColor } from "@mui/system";
import imageicon from "./imageicon.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CitySelector from "./components/CitySelector";
import { Container } from "react-bootstrap";
import UseFetch from "./hooks/UseFetch";
import { API_KEY, API_BASE_URL } from "./apis/congif";
import WeatherList from "./components/WeatherList";
// import {View, StyleSheet} from 'react-native';
import Temperature2 from "./Temperature2";
import Co2level2 from "./Co2level2";
import Water2 from "./Water2";
import Humidity2 from "./Humidity2";
import NodeMesh from "./NodeMesh";
import Button1 from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function registered() {
  alert("Device Registered Successfully");
}

function pumpStart() {
  alert("Pump Started");
}

function pumpStop() {
  alert("Pump Stopped");
}

function nodeMesh() {
  return <img src="./nodemesh.PNG"></img>;
}

function App() {
  const [T, setT] = useState(0);
  useEffect(() => {
    if (21 <= T && T <= 27) {
      setcolor("green");
    } else {
      setcolor("red");
    }
  }, [T]);

  const [C, setC] = useState(0);
  useEffect(() => {
    if (300 <= C && C <= 440) {
      setcolor("green");
    } else {
      setcolor("red");
    }
  }, [C]);

  const [W, setW] = useState(0);
  useEffect(() => {
    if (50 <= C && C <= 100) {
      setcolor("green");
    } else {
      setcolor("red");
    }
  }, [W]);

  const [H, setH] = useState(0);
  useEffect(() => {
    if (40 <= H && H <= 75) {
      setcolor("green");
    } else {
      setcolor("red");
    }
  }, [H]);

  const [color, setcolor] = useState("green");

  const { data, error, isLoading, setUrl } = UseFetch();

  const getContent = () => {
    if (error)
      return (
        <div>
          <br></br>
          <h5>Error when fetching: {error}</h5>
        </div>
      );
    if (!data && isLoading)
      return (
        <div>
          <br></br>
          <h5>LOADING...</h5>
        </div>
      );
    if (!data) return null;
    return <WeatherList weathers={data.list} />;
  };

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: "#767676",
        backgroundColor: "white",
        height: "0.1",
        width: "100%",
        opacity: "0.3",
      }}
    />
  );

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  const [toDisplay, settoDisplay] = useState("Temperature2");

  //   const [k, setk] = useState(0);

  //   function makeTimer(){
  //      setInterval(() => {
  //      let rand = Math.floor(Math.random() * 10) + 1
  //        setk(rand)
  //      }, 10000)
  //    }
  //  const [values, setValues] = useState([]);

  //    useEffect (async() => {
  //      const settings = {
  //          method: 'POST',
  //          body: "data_request",
  //          headers: {
  //              Accept: 'text/plain',
  //              'Content-Type': 'text/plain',

  //          }
  //      };

  //      let newURL = `http://localhost:5000/api/fetch_data`
  //      const fetchResponse = await fetch(newURL, settings);
  //      const data = await fetchResponse.json();
  //      if(data?.status == 'success'){
  //          setValues(data.data);
  //      }
  //      else if(data?.status == 'verified'){
  //      }

  // },[k])
  // console.log(values);

  return (
    <>
      <div className="App">
        <div
          className="Header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#e8e8e8",
          }}
        >
          <img
            className="logo"
            src={Pro_logo}
            alt="Pro logo"
            // style={{ position: "relative", marginLeft: "-200px" }}
          />

          <p className="dnt">
            Last Updated :{" "}
            {dateState.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
            ,{" "}
            {dateState.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </p>
        </div>
        <div className="App" style={{ backgroundColor: "#ffffff" }}>
          {/* <p >
          {dateState.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </p> */}
        </div>
        <div class="DisplayButtons" style={{ paddingTop: "10px" }}>
          {/* color dot in inside button in react js */}
          {/* 
        <Button variant="outlined" style={{
          marginRight: "8%", borderWidth: 1,
          borderColor: '#AFAFAF',
          alignItems: 'center',
          justifyContent: 'center',
          height: '5%',
          width: '25%',
          backgroundColor: '#fff',
          borderWidth: 1.5,
          borderRadius: 20,
        }}><b style={{ fontFamily: "sans-serif", fontSize: "90%", marginRight: "3%" }}>System Status</b> <Circle r={12} fill={{ color: '#EBEF18' }} /></Button>
        <Button variant="outlined" style={{
          marginRight: "8%", borderWidth: 1,
          borderColor: '#AFAFAF',
          alignItems: 'center',
          justifyContent: 'center',
          height: '5%',
          width: '25%',
          backgroundColor: '#fff',
          borderColor: '#B4B4B4',
          borderWidth: 1.5,
          borderRadius: 20,
        }}><b style={{ fontFamily: "sans-serif", fontSize: "90%", marginRight: "3%" }}>Notifications</b>
          <Circle r={12} fill={{ color: '#EBEF18' }} /></Button>
        <Button variant="outlined" style={{
          borderWidth: 1,
          borderColor: '#AFAFAF',
          alignItems: 'center',
          justifyContent: 'center',
          height: '5%',
          width: '25%',
          backgroundColor: '#fff',
          borderColor: '#B4B4B4',
          borderWidth: 1.5,
          borderRadius: 20,
        }} ><b style={{ fontFamily: "sans-serif", fontSize: "90%", marginRight: "5%" }}></b>
          <Circle r={12} fill={{ color: '#3AB207' }} /></Button> */}
        </div>
        <div className="Enter_device" style={{ marginTop: "25px" }}>
          <container>
            <TextField
              className="inputRounded"
              id="outlined-basic"
              label="Enter Device ID to add"
              variant="outlined"
              style={{ width: "50%", borderWidth: "5px" }}
            />
          </container>
          <container>
            <Button
              onClick={registered}
              style={{
                marginLeft: "7%",
                height: "50px",
                width: "30%",
                fontSize: "medium",
                fontFamily: "sans-serif",
                color: "#F5F5F5",
                backgroundColor: "#0E6938",
                borderRadius: 15,
              }}
              variant="contained"
            >
              Register
            </Button>
          </container>
        </div>
        <div
          className="Solar"
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          <Button
            className="solarbutton"
            variant="outlined"
            style={{
              marginTop: "5px",
              marginLeft: "5px",
              marginRight: "5px",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              height: "45px",
              width: "400px",
              borderColor: "#0E6938",
              borderWidth: "2px",
              backgroundColor: "#e7f0eb",
              borderRadius: 20,
            }}
          >
            <b className="Solarbattery" style={{ fontSize: "16px" }}>
              Solar Powered Battery{" "}
            </b>
            <b
              className="Solarbattery"
              style={{ color: "green", marginLeft: "10px", fontSize: "20px" }}
            >
              {" "}
              80%
            </b>{" "}
          </Button>
        </div>
        <div className="line" style={{ marginTop: "15px", width: "100%" }}>
          <ColoredLine color="#C0C0C0" />
        </div>
        <div
          class="DisplayButtons"
          style={{
            height: "",
            marginBottom: "30px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <container>
            <button
              className="btn-temp"
              onClick={() => {
                setT(22);
                settoDisplay("Temperature2");
              }}
            >
              <b
                className="btn-text-temp"
                style={{ fontFamily: "sans-serif", fontSize: "15px" }}
              >
                TEMPERATURE
              </b>
            </button>

            <button
              className="btn-temp"
              onClick={() => {
                setW(60);
                settoDisplay("Water2");
              }}
            >
              <b
                className="btn-text-temp"
                style={{ fontFamily: "sans-serif", fontSize: "15px" }}
              >
                WATER
              </b>
            </button>

            <button
              className="btn-temp"
              onClick={() => {
                setC(30);
                settoDisplay("Co2level2");
              }}
            >
              <b
                className="btn-text-temp"
                style={{ fontFamily: "sans-serif", fontSize: "15px" }}
              >
                CO2 LEVEL
              </b>
            </button>

            <button
              className="btn-temp"
              onClick={{ backgroundColor: "#EE6002" }}
              href="#"
            >
              <b
                className="btn-text-temp"
                style={{ fontFamily: "sans-serif", fontSize: "15px" }}
              >
                NPK VALUES
              </b>
            </button>

            <button
              className="btn-temp"
              onClick={() => {
                setH(30);
                settoDisplay("Humidity2");
              }}
            >
              <b
                className="btn-text-temp"
                style={{ fontFamily: "sans-serif", fontSize: "15px" }}
              >
                HUMIDITY
              </b>
            </button>

            <button
              className="btn-temp"
              onClick={() => {
                settoDisplay("NodeMesh");
              }}
            >
              <b
                className="btn-text-temp"
                style={{ fontFamily: "sans-serif", fontSize: "15px" }}
              >
                NODEMESH
              </b>
            </button>
          </container>
        </div>{" "}
        <div className="abcd" />
        <div className="line" style={{ marginTop: "30px" }}>
          <ColoredLine color="grey" />
        </div>
        <Container className="Apper" style={{ paddingBottom: "10x" }}>
          <CitySelector
            onSearch={(city) =>
              setUrl(
                `${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`
              )
            }
          />

          {/* conditionally render  */}
          {getContent()}
        </Container>
        <div className="Today_status">
          <div
            className="Today_status_header"
            style={{
              fontSize: "25px",
              marginRight: "500px",
              fontFamily: "Noto Sans",
            }}
          ></div>

          {/* middle sectoin square */}
          <div
            className="midsquare"
            id="root"
            style={{ padding: "1%", backgroundColor: "#f5f5f5" }}
          >
            {/* here */}

            <Temperature2 wname={color} toDisplay={toDisplay} />
            <Co2level2 wname={color} toDisplay={toDisplay} />
            <Water2 wname={color} toDisplay={toDisplay} />
            <Humidity2 wname={color} toDisplay={toDisplay} />
            <NodeMesh toDisplay={toDisplay} />
            {/* <NPK2 wname = {color} toDisplay = {toDisplay}/> */}
          </div>
        </div>
        <div className="Pump">
          <b style={{ fontSize: "30px", position: "relative" }}>
            {" "}
            Irrigation Pump Switch{" "}
          </b>
        </div>
        <div
          className="Options"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingBottom: "50px",
            backgroundColor: "f5f5f5",
          }}
        >
          <button
            onClick={pumpStart}
            style={{
              backgroundColor: "#FFFFFF",
              width: "40%",
              height: "200px",
              borderColor: "#0E6938",
              borderWidth: "10px",
              borderRadius: "20px",
            }}
          >
            <p style={{ fontSize: "30px" }}>Start</p>
          </button>

          <button
            onClick={pumpStop}
            style={{
              backgroundColor: "#FFFFFF",
              width: "40%",
              height: "200px",
              borderColor: "#B00020",
              borderWidth: "10px",
              borderRadius: "20px",
            }}
          >
            <p style={{ fontSize: "30px" }}>Stop</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
