import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import API from "../api";

function WeatherCard(props) {
  const { name, temperature, humidity, date } = props.cityData;
  const delButton = props.delButton;
  let id;
  if (delButton) {
    id = props.cityData.id;
  }
  const saveSearch = async () => {
    API.post("/", {
      name: name,
      temperature: temperature,
      humidity: humidity,
      date: date,
    }).then((res) => {
      console.log(res);
    });
  };
  const deleteSearch = async () => {
    API.delete("/", {
      data: { id: id },
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <Row className="justify-content-center m-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1534794048419-48e110dca88e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80"
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Temperature:</strong> {temperature}°F
            <br />
            <strong>Humidity:</strong> {humidity}%
          </Card.Text>
          {delButton ? (
            <Button variant="primary" onClick={deleteSearch}>
              Delete
            </Button>
          ) : (
            <Button variant="primary" onClick={saveSearch}>
              Save
            </Button>
          )}
        </Card.Body>
      </Card>
    </Row>
  );
}

export default WeatherCard;
