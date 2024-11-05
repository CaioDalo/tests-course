import { Link, useParams } from "react-router-dom";
import { PokemonTypes } from "../../types/PokemonTypes";
import { useEffect, useState } from "react";

import styles from "./index.module.scss";

interface PokemonDetail {
	fetchPokemon: (id: number) => Promise<PokemonTypes>;
}

export function PokemonDetail({ fetchPokemon }: PokemonDetail) {
	const params = useParams();

	const [pokemon, setPokemon] = useState<PokemonTypes>();
	const [error, setError] = useState("");

	useEffect(() => {
		(async () => {
			setError("");

			if (!params.id || params.id === "0") {
				setError("Id inválido");
				return;
			}
			const fetchedPokemon = await fetchPokemon(Number(params.id));
			setPokemon(fetchedPokemon);
		})();
	}, []);

	return (
		<div className={styles.container}>
			<div>
				<h1>{pokemon?.name}</h1>
				<img src={pokemon?.image} alt={pokemon?.name} />
				<strong>{pokemon?.type}</strong>
			</div>
			<Link to="/dashboard">Voltar</Link>
			{error && <strong>{error}</strong>}
		</div>
	);
}
