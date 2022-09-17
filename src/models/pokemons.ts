"use strict";

import { Model, UUIDV4 } from "sequelize";

interface pokemonsAttributes {
  id: string;
  pokemondata?: object;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class pokemons
    extends Model<pokemonsAttributes>
    implements pokemonsAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    pokemondata?: object;
  }
  pokemons.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
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
      modelName: "pokemons",
      timestamps: false,
    }
  );
  return pokemons;
};
