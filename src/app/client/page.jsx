import React from "react";
import PokemonList from "../../components/PokemonList";

const ClientPage = ({ isClient }) => {
  return (
    <div>
      <h1>Liste des Pokémon</h1>
      <PokemonList isClient={isClient} />
    </div>
  );
};

export default ClientPage;
