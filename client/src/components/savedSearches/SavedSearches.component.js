import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WeatherCard from "../WeatherCard.component";

import axios from "axios";
import API from "../../api";

export default function SavedSearches() {
  const [isLoading, setIsLoading] = useState(true);
  const [savedSearches, setSavedSearches] = useState([]);
  useEffect(() => {
    API.get("/").then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <>
      <Container>
        <Row>Hello</Row>
      </Container>
    </>
  );
}
