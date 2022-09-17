"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import dotenv from 'dotenv';
// dotenv.config();
const app = (0, express_1.default)();
const port = 3000;
const graphql_request_1 = require("graphql-request");
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const endpoint = "https://graphql-pokemon2.vercel.app";
        const graphQLClient = new graphql_request_1.GraphQLClient(endpoint, {
            headers: {
                authorization: "Bearer MY_TOKEN",
            },
        });
        const query = (0, graphql_request_1.gql) `
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
        const data = yield graphQLClient.request(query);
        let x = Object.assign({}, data);
        console.log(x.pokemons[0].number);
    });
})().catch((error) => console.error(error));
app.get("/", (req, res) => {
    res.send("Express + TypeScript Servera");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${3000}`);
});
