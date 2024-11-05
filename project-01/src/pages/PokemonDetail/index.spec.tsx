import { PokemonDetail } from ".";
import { fetchPokemonDetail } from "../../services/PokemonService";
import { render, screen } from "@testing-library/react";
import * as rrd from "react-router-dom";

const mockFetchPokemonDetail = vi
	.fn(fetchPokemonDetail)
	.mockImplementation(async () => {
		return {
			id: 1,
			name: "Pikachu",
			type: "Elétrico",
			image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
		};
	});

describe("Page pokemon detail tests", () => {
	vi.mock("react-router-dom", () => {
		return {
			useParams: () => ({
				id: 1,
			}),
			Link: vi.fn().mockImplementation((props) => props.children),
		};
	});

	beforeEach(() => {
		render(<PokemonDetail fetchPokemon={mockFetchPokemonDetail} />);
	});

	it("Should render a pokemon detail", async () => {
		const pikachu = await screen.findByText("Pikachu");
		expect(pikachu).toBeInTheDocument();
	});

	it("Should have a link to go back", async () => {
		const goBackLink = await screen.findByText("Voltar");
		expect(goBackLink).toBeInTheDocument();
	});

	it("Should have a error message if the id is 0", async () => {
		vi.spyOn(rrd, "useParams").mockImplementationOnce(() => ({ id: "0" }));

		render(<PokemonDetail fetchPokemon={mockFetchPokemonDetail} />);

		const error = await screen.findByText("Id inválido");
		expect(error).toBeInTheDocument();
	});

	it("Should have a error message if the id is null", async () => {
		vi.spyOn(rrd, "useParams").mockImplementationOnce(() => ({ id: "" }));

		render(<PokemonDetail fetchPokemon={mockFetchPokemonDetail} />);

		const error = await screen.findByText("Id inválido");
		expect(error).toBeInTheDocument();
	});
});
