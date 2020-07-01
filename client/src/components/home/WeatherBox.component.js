import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import WeatherCard from "../WeatherCard.component";

import API from "../../api";

function WeatherBox() {
  const [cityName, setCityName] = useState("");
  const [cityData, setCityData] = useState({
    name: "",
    temperature: 0,
    humidity: 0,
    date: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  const searchCity = async () => {
    setIsLoading(true);
    const response = await API.post("/openweather/", {
      cityName: cityName,
    });
    console.log(response.data);
    const d = new Date();
    const today =
      d.getFullYear() +
      "-" +
      (d.getMonth() + 1) +
      "-" +
      d.getDate() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      ":" +
      d.getSeconds();
    const F = response.data.main.temp * (9 / 5) - 459.67;
    setIsLoading(false);
    setCityData({
      name: response.data.name,
      temperature: F.toFixed(0),
      humidity: response.data.main.humidity,
      date: today,
    });
  };

  return (
    <div>
      <Container className="border mt-3">
        <Row className="justify-content-center mt-3">
          <h3>Welcome to The WeatherBox!</h3>
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
        {isLoading && (
          <Row className="justify-content-center m-3">
            <Spinner animation="grow" />
          </Row>
        )}
        {cityData.name && <WeatherCard cityData={cityData} delButton={false} />}
      </Container>
    </div>
  );
}

export default WeatherBox;
