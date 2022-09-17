import express, { Express, Request, Response } from "express";
// import dotenv from 'dotenv';

// dotenv.config();

const app: Express = express();
const port = 3000;
import { GraphQLClient, gql } from "graphql-request";
(async function () {
  const endpoint = "https://graphql-pokemon2.vercel.app";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: "Bearer MY_TOKEN",
    },
  });
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
      }
    }
  `;

  interface TData {
    pokemons: Array<{ name: number; maxCP: string }>;
  }

  const data = await graphQLClient.request<TData>(query);
  let x: TData = {
    ...data,
  };
  console.log(x.pokemons[0].name);
})().catch((error) => console.error(error));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Servera");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${3000}`);
});
