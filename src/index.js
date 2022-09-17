"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const { Sequelize } = require("sequelize");
const index_1 = __importDefault(require("../models/index"));
// (async function () {
//   const endpoint = "https://graphql-pokemon2.vercel.app";
//   const graphQLClient = new GraphQLClient(endpoint, {
//     headers: {
//       authorization: "Bearer MY_TOKEN",
//     },
//   });
//   const query = gql`
//     query pokemons($first: Int = 2) {
//       pokemons(first: $first) {
//         id
//         number
//         name
//         weight {
//           minimum
//           maximum
//         }
//         height {
//           minimum
//           maximum
//         }
//         classification
//         types
//         resistant
//         weaknesses
//         fleeRate
//         maxCP
//         maxHP
//         image
//       }
//     }
//   `;
//   interface TData {
//     pokemons: Array<{ name: number; maxCP: string }>;
//   }
//   const data = await graphQLClient.request<TData>(query);
//   let x: TData = {
//     ...data,
//   };
//   console.log(x.pokemons[0].name);
// })().catch((error) => console.error(error));
// app.get("/", async (req: Request, res: Response) => {
//   const [result] = await db.sequelize.query("select * from user");
//   res.send("Express + TypeScript Server");
// });
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${3000}`);
    index_1.default.sync().then(() => {
        console.log("connect to db");
        const [result] = index_1.default.sequelize.query("select * from users");
    });
});
