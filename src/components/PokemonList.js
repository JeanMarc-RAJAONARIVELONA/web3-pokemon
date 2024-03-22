"use client";
import React, { useState, useEffect } from "react";

const buttonstyle = {
  padding: "1.5vh 2vw ",
  fontSize: "1.1rem",
  color: "white",
  borderRadius: "5px",
  outline: "none",
  border: "none",
  background: "blue",
};
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
    <div
      style={{
        width: "100%",
        paddingTop: "5vh",
      }}
    >
      <ul
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2vh",
        }}
      >
        {pokemons.map((pokemon, index) => (
          <li
            key={index}
            style={{
              width: "15vw",
              height: "30vh",
              border: "1px solid",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              gap: "1vh",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "80%",
                background: "whitesmoke",
                backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
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
      <div
        style={{
          background: "whitesmoke",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "10vh",
          cursor: "pointer",
          marginTop: "5vh",
        }}
      >
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          style={buttonstyle}
        >
          Précédent
        </button>
        <span style={{ padding: "1vh 2vw" }}>
          Page {currentPage} sur {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          style={buttonstyle}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
