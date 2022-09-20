require("dotenv").config();

import express, { Express, Request, Response } from "express";
const app: Express = express();
const port = 5558;
const cors = require("cors");
const { initialData } = require("./utils/initial");
const { frontendEndpoint } = require("../src/constants");

app.use("/", require("./routes/index.routes"));
app.use(
  cors({
    origin: frontendEndpoint,
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.listen(port, async () => {
  initialData();
});
