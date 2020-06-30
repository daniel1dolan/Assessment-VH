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

api.post("/", async (req, res) => {
  const { name, temperature, humidity, date } = req.body;
  try {
    const result = await db("weather").insert({
      name,
      temperature,
      humidity,
      date,
    });
    res.json({ result });
  } catch (err) {
    console.log(err);
  }
});

api.delete("/", async (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  try {
    const result = await db("weather").where("id", id).del();
    console.log(result);
    const savedWeather = await db("weather");
    res.json({ savedWeather });
  } catch (err) {
    console.log(err);
  }
});

export default api;
