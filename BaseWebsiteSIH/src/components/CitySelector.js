import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
const CitySelector = ({ onSearch }) => {
  const [city, setCity] = useState("");

  return (
    <>
      <Row>
        <Col>
          <br></br>
          <h2>Search your city</h2>
          <br></br>
        </Col>
      </Row>

      <Row>
        <Col xl={5} style={{ marginLeft: "auto", marginRight: "auto" }}>
          <FormControl
            style={{ borderWidth: "3px", fontSize: "medium" }}
            placeholder="Enter city"
            onChange={(event) => setCity(event.target.value)}
            value={city}
          />
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col style={{ paddingBottom: "20px" }}>
          <Button
            onClick={() => onSearch(city)}
            style={{
              backgroundColor: "#0c023e",
              width: "200px",
              fontSize: "medium",
            }}
          >
            Check Weather
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;
