import { useEffect, useState } from "react";
import { PokemonTypes } from "../../types/PokemonTypes";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

interface DashboardProps {
	fetchPokemonsList: () => Promise<Array<PokemonTypes>>;
}

export function Dashboard({ fetchPokemonsList }: DashboardProps) {
	const [pokemons, setPokemons] = useState<Array<PokemonTypes>>([]);

	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			const pokemonList = await fetchPokemonsList();
			setPokemons(pokemonList);
		})();
	}, []);

	const handleClick = (id: number) => {
		navigate(`/pokemon-detail/${id}`);
	};

	return (
		<div className={styles.container}>
			<h1>Dashboard</h1>

			<ul className={styles["container-pokemons"]}>
				{pokemons.map((pokemon) => (
					<li key={pokemon.id} onClick={() => handleClick(pokemon.id)}>
						<h1>{pokemon.name}</h1>
						<img src={pokemon.image} alt={pokemon.name} />
						<strong>{pokemon.type}</strong>
					</li>
				))}
			</ul>
		</div>
	);
}
