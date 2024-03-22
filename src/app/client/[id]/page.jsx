"use client";
import React from "react";
import PokemonDetails from "../../../components/PokemonDetails";
import { useRouter } from "next/navigation";

const ServerOrClientDetailsPage = ({ isServer }) => {
  const id = useRouter().query;

  return (
    <div>
      <h1>Détails du Pokémon</h1>
      <PokemonDetails id={id} />
    </div>
  );
};

export default ServerOrClientDetailsPage;
