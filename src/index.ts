import express, { Express, Request, Response } from "express";
const app: Express = express();
const port = 3000;
const { initialData } = require("./utils/initial");

app.use("/", require("./routes/index.routes"));
app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${3000}`);
  initialData();
  /// get All Data
  // const results = await db.pokemons.findAll();
  // console.log("All users:", JSON.stringify(results));
});
