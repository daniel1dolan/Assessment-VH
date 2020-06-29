import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function WeatherBox() {
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
            />
            <InputGroup.Append>
              <Button variant="primary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Row>
        <Row className="justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1534794048419-48e110dca88e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default WeatherBox;
