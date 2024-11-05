import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import {
	fetchPokemonDetail,
	fetchPokemonsList,
} from "./services/PokemonService";
import { PokemonDetail } from "./pages/PokemonDetail";

export function MainRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/sign-up" element={<SignUp />} />
			<Route
				path="/dashboard"
				element={<Dashboard fetchPokemonsList={fetchPokemonsList} />}
			/>
			<Route
				path="/pokemon-detail/:id"
				element={<PokemonDetail fetchPokemon={fetchPokemonDetail} />}
			/>
			<Route path="*" element={<h1>404 page not found</h1>} />
		</Routes>
	);
}
