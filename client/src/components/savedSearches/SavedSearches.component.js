import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import WeatherCard from "../WeatherCard.component";

import API from "../../api";

export default function SavedSearches() {
  const [isLoading, setIsLoading] = useState(true);
  const [savedSearches, setSavedSearches] = useState([]);
  useEffect(() => {
    API.get("/api/").then((res) => {
      console.log(res);
      setSavedSearches(res.data.savedWeather);
      setIsLoading(false);
    });
  }, []);
  const deleteSearch = async (id) => {
    try {
      let result = await API.delete("/api/", {
        data: { id: id },
      });
      setSavedSearches(result.data.savedWeather);
    } catch (error) {
      throw new Error("Could not delete saved Search.");
    }
  };
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-3">
          {isLoading && <Spinner animation="grow" />}
          {!isLoading &&
            savedSearches.map((weatherData, index) => {
              return (
                <WeatherCard
                  key={index}
                  cityData={weatherData}
                  delButton={true}
                  deleteSearch={deleteSearch}
                />
              );
            })}
        </Row>
      </Container>
    </>
  );
}
