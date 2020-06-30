import express from "express";
import db from "../../data/db";

const api = express();
// db("weather")
//   .insert({
//     name: "Houston",
//     temperature: 60,
//     humidity: 50,
//     date: "Jun 30 2020",
//   })
//   .then((result) => {
//     console.log(result, "");
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// db("weather")
//   .where({ id: "2" })
//   .del()
//   .then((res) => {
//     console.log(res);
//   });

api.get("/", async (req, res) => {
  const savedWeather = await db("weather");
  res.json({ savedWeather });
});

api.post("/", (req, res) => {
  res.send({
    message: "post recieved",
  });
});

api.delete("/", (req, res) => {
  res.send({
    message: "delete recieved",
  });
});

export default api;
