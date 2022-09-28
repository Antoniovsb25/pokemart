import { useEffect, useState } from "react";
import { useCartContext } from "../../hooks/usePokeCart";
import SkeletonCard from "../SkeletonCard";
import PokemonCard from "./components/PokemonCard";
import axios from "axios";

import styles from "./PokeList.module.css";
import 'react-loading-skeleton/dist/skeleton.css'

const PokeList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState<any>([]);

  const { inputValue } = useCartContext();

  const getPokemons = async () => {
    setIsLoading(true)
    const endpoints: string[] = [];
    for (let i = 1; i <= 150; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res: any) => {
      setPokemons(res);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    if (inputValue === "") getPokemons();
    if (inputValue !== "") {
      setIsLoading(true);
      let filteredPokemon: any = []
      for (var i in pokemons) {
        if (pokemons[i].data.name.includes(inputValue)) {
          filteredPokemon.push(pokemons[i]);
        }
      }
      setPokemons(filteredPokemon)
      setIsLoading(false);
    }
  },[inputValue]);

  return (
    <section className={styles.pokeList}>
      {isLoading && <SkeletonCard />}
      {pokemons.map((pokemon: any) => {
        return (
          <PokemonCard
          id={pokemon.data.id}
            key={pokemon.data.name}
            name={pokemon.data.name}
            image={pokemon.data.sprites.front_default}
            imageCart={pokemon.data.sprites.versions["generation-vii"].icons.front_default}
            price={pokemon.data.weight}
          />
        );
      })}
    </section>
  );
};

export default PokeList;
