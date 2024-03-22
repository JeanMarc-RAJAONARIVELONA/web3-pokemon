import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const ServerDetails = () => {
  const router = useRouter();
  const id = router.query;
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    if (id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((data) => setPokemon(data));
    }
  }, [id]);

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Order: {pokemon.order}</p>
    </div>
  );
};

export default ServerDetails;
