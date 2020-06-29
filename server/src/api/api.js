import express from "express";

const api = express();

api.get("/", (req, res) => {
  res.send({
    message: "hello from the API",
  });
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
