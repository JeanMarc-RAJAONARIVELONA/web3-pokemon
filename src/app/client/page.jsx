import React from "react";
import PokemonList from "../../components/PokemonList";

const ClientPage = ({ isClient }) => {
  return (
    <div style={{ position: "relative", height: "100vh", overflowY: "scroll" }}>
      <h1 style={{ width: "100%", textAlign: "center", padding: "2vh" }}>
        Liste des Pokémon
      </h1>
      <PokemonList isClient={isClient} />
    </div>
  );
};

export default ClientPage;
