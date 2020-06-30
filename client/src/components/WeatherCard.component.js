import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function WeatherCard(props) {
  const { name, temperature, humidity } = props.cityData;
  const saveSearch = () => {};
  return (
    <Row className="justify-content-center mb-3">
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
          <Button variant="primary">Save</Button>
        </Card.Body>
      </Card>
    </Row>
  );
}

export default WeatherCard;
