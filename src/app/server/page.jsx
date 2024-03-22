import React from "react";
import PokemonList from "../../components/PokemonList";

const Server = ({ isServer }) => {
  return (
    <div style={{ position: "relative", height: "100vh", overflowY: "scroll" }}>
      <h1 style={{ width: "100%", textAlign: "center", padding: "2vh" }}>
        Liste des Pokémon
      </h1>
      <PokemonList isServer={isServer} />
    </div>
  );
};

export default Server;
