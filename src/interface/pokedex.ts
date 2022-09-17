export interface Pokedex {
  pokemons: Pokemon[];
}

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  weight: Eight;
  height: Eight;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
  attacks: Attacks;
  evolutions: Evolution[];
}

export interface Attacks {
  fast: Fast[];
  special: Fast[];
}

export interface Fast {
  name: string;
  type: string;
  damage: number;
}

export interface Evolution {
  id: string;
  number: string;
  name: string;
  image: string;
  evolutions?: Evolution[] | null;
}

export interface Eight {
  minimum: string;
  maximum: string;
}
