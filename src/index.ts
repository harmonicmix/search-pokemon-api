import express, { Express, Request, Response } from "express";
const app: Express = express();
const port = 5558;
const cors = require("cors");
const { initialData } = require("./utils/initial");

app.use("/", require("./routes/index.routes"));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  initialData();
});
