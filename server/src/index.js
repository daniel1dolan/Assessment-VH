import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import api from "./api/api";

const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", api);

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
