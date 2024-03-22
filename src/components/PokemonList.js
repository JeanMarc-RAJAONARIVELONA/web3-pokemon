"use client";
import React, { useState, useEffect } from "react";

const PokemonList = ({ isServer }) => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPokemons = async () => {
      const limit = 50;
      const offset = (currentPage - 1) * limit;
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const data = await response.json();
      setPokemons(data.results);
      setTotalPages(Math.ceil(data.count / limit));
    };

    fetchPokemons();
  }, [currentPage]);

  return (
    <div>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            {pokemon.name}
            <button
              onClick={() =>
                (window.location.href = `/${isServer ? "server" : "client"}/${
                  pokemon.name
                }`)
              }
            >
              Détails
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Précédent
        </button>
        <span>
          Page {currentPage} sur {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
