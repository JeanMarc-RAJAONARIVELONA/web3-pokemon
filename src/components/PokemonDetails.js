import React, { useState, useEffect } from "react";

const PokemonDetails = ({ id }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Taille: {pokemon.height}</p>
      <p>Poids: {pokemon.weight}</p>
      <p>Types: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
      <p>Numéro: {pokemon.order}</p>
    </div>
  );
};

export default PokemonDetails;
