import {
  getPokemons,
  searchPokemonsByName,
} from "../controllers/pokemons.controller";
import { Router } from "express";
const router = Router();

router.get("/", getPokemons);
router.get("/search?:name", searchPokemonsByName);

module.exports = router;
