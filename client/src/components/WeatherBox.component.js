import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function WeatherBox() {
  const [cityName, setCityName] = useState("");
  const [cityData, setCityData] = useState({
    name: "",
    temperature: 0,
    humidity: 0,
    time: "",
  });

  const handleChange = (event) => {
    setCityName(event.target.value);
    console.log(cityName);
  };

  const searchCity = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8c3d8bf818c52d5d46964ed0d3c7b483`
    );
    const json = await response.json();
    console.log(json);
    const d = Date();
    const F = json.main.temp * (9 / 5) - 459.67;
    setCityData({
      name: json.name,
      temperature: F.toFixed(0),
      humidity: json.main.humidity,
      time: d.toString(),
    });
  };

  return (
    <div>
      <Container className="border mt-3">
        <Row className="justify-content-center">
          <h3>Welcome to The WeatherBox</h3>
        </Row>
        <Row>
          <InputGroup className="m-5">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon2">
                Enter a City Name
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Ex. - Houston"
              aria-label="Ex. - Houston"
              aria-describedby="basic-addon2"
              onChange={handleChange}
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={searchCity}>
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Row>
        {cityData.name && (
          <Row className="justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1534794048419-48e110dca88e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80"
              />
              <Card.Body>
                <Card.Title>{cityData.name}</Card.Title>
                <Card.Text>
                  <strong>Temperature:</strong> {cityData.temperature}°F
                  <br />
                  <strong>Humidity:</strong> {cityData.humidity}%
                </Card.Text>
                <Button variant="primary">Save</Button>
              </Card.Body>
            </Card>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default WeatherBox;
