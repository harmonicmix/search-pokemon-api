import { RequestHandler } from "express";
const { Op } = require("sequelize");
import db from "../models";

export const getPokemons: RequestHandler = async (req, res, next) => {
  const result = await db.pokemons.findAll();
  res.send(result);
};
export const searchPokemonsByName: RequestHandler = async (req, res, next) => {
  const name = req.query.name;
  console.log("id: " + req.query.name);
  const result = await db.pokemons.findAll({
    where: {
      pokemondata: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    },
  });
  res.send(result);
};
