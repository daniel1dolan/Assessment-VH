import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ToastMessage from "./home/ToastMessage.component";

import API from "../api";

function WeatherCard(props) {
  const { name, temperature, humidity, date } = props.cityData;
  const [openAlert, changeAlert] = useState(false);
  const delButton = props.delButton;
  let id;
  let deleteSearch;
  if (delButton) {
    id = props.cityData.id;
    deleteSearch = () => {
      props.deleteSearch(id);
    };
  }
  const saveSearch = async () => {
    try {
      const res = await API.post("/api/", {
        name: name,
        temperature: temperature,
        humidity: humidity,
        date: date,
      });
      console.log(res);
      changeAlert(true);
    } catch (error) {
      throw new Error("Could not save search.");
    }
  };
  return (
    <Row className="justify-content-center m-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1534794048419-48e110dca88e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80"
        />
        <Card.Body>
          {openAlert && <ToastMessage />}
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
