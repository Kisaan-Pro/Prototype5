import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row } from "react-bootstrap";
import WeatherCard from "./WeatherCard";
import "../styles/WeatherList.css";

const WeatherList = ({ weathers }) => {
  return (
    <div>
      <Row className="big-screen">
        {weathers.map(({ dt, main, weather }) => (
          <Col key={dt}>
            <WeatherCard
              temp_max={main.temp_max}
              temp_min={main.temp_min}
              dt={dt * 1000}
              main={weather[0].main}
              icon={weather[0].icon}
            />
          </Col>
        ))}
      </Row>
      <Row className="small-screen">
        <Carousel>
          {weathers.map(({ dt, main, weather }) => (
            <Carousel.Item key={dt}>
              <WeatherCard
                temp_max={main.temp_max}
                temp_min={main.temp_min}
                dt={dt * 1000}
                main={weather[0].main}
                icon={weather[0].icon}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </div>
  );
};

export default WeatherList;
