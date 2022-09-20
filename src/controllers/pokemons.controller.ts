import { RequestHandler } from "express";
import db from "../models";
const { Op } = require("sequelize");
const { sendResponse } = require("../utils/response");

export const getPokemons: RequestHandler = async (req, res, next) => {
  const result = await db.pokemons.findAll();
  await sendResponse(res, 200, "success", result);
};

export const searchPokemonsByName: RequestHandler = async (req, res, next) => {
  const name = req.query.name;
  const result = await db.pokemons.findAll({
    where: {
      pokemondata: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    },
  });
  if (result.length) {
    await sendResponse(res, 200, "success", result);
  } else {
    await sendResponse(res, 404, "error", "not Found");
  }
};
