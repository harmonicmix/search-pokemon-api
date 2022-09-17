import express from "express";
const router = express.Router();

router.use("/pokemons", require("./pokemons.routes"));
module.exports = router;
