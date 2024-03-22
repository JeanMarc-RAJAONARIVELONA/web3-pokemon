import React from "react";
import PokemonList from "../../components/PokemonList";

const Server = ({ isServer }) => {
  return (
    <div>
      <h1>Liste des Pokémon</h1>
      <PokemonList isServer={isServer} />
    </div>
  );
};

export default Server;
