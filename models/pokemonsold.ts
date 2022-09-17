"use strict";

import { Model } from "sequelize";

interface pokemonsAttributes {
  id: number;
  pokemondata?: object;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class pokemons
    extends Model<pokemonsAttributes>
    implements pokemonsAttributes
  {
    id!: number;
    pokemondata?: object;
  }
  pokemons.init(
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      pokemondata: {
        type: DataTypes.JSONB,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "pokemons",
      createdAt: false,
      updatedAt: false,
    }
  );
  return pokemons;
};
