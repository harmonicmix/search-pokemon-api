import db from "../models";
import { GraphQLClient, gql } from "graphql-request";
import { Pokedex, Pokemon } from "../interface/pokedex";
require("dotenv").config();

const initialData = async () => {
  const results = await db.pokemons.findOne();
  if (!results) {
    const data = await getDatafromGraphQl();
    let dataPokemon: { pokemondata: Pokemon }[] = [];
    data.map((e) => {
      dataPokemon.push({ pokemondata: e });
    });
    console.log(dataPokemon);
    await db.pokemons.bulkCreate(dataPokemon);
  } else {
    console.log("have data don't be initail");
  }
};

const getDatafromGraphQl = async () => {
  const endpoint = "https://graphql-pokemon2.vercel.app";
  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    query pokemons($first: Int = 2) {
      pokemons(first: $first) {
        id
        number
        name
        weight {
          minimum
          maximum
        }
        height {
          minimum
          maximum
        }
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
        evolutions {
          id
          number
          name
          image
          evolutions {
            id
            number
            name
            image
          }
        }
      }
    }
  `;
  const data = await graphQLClient.request<Pokedex>(query);
  let result: Pokedex = {
    ...data,
  };
  return result.pokemons;
};
module.exports = {
  initialData,
};
