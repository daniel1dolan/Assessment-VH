import express from "express";
import axios from "axios";
require("dotenv").config();

const api = express();

api.post("/", async (req, res) => {
  const cityName = req.body.cityName;
  console.log(cityName);
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}`
    );
    res.json(response.data);
  } catch (e) {
    console.log(e);
  }
});

export default api;
