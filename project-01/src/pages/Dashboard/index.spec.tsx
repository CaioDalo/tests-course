import { Dashboard } from ".";
import { fireEvent, render, screen } from "@testing-library/react";
import { fetchPokemonsList } from "../../services/PokemonService";

const mockFetchPokemonsList = vi
	.fn(fetchPokemonsList)
	.mockImplementation(async () => {
		return [
			{
				id: 1,
				name: "Pikachu",
				image:
					"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
				type: "Electric",
			},
			{
				id: 2,
				name: "Rotom",
				image:
					"https://assets.pokemon.com/assets/cms2/img/pokedex/full/479.png",
				type: "Electric",
			},
			{
				id: 3,
				name: "Charmander",
				image:
					"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
				type: "Fire",
			},
			{
				id: 4,
				name: "Minun",
				image:
					"https://assets.pokemon.com/assets/cms2/img/pokedex/full/312.png",
				type: "Electric",
			},
			{
				id: 5,
				name: "Venusaur",
				image:
					"https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
				type: "Poison",
			},
			{
				id: 6,
				name: "Geodude",
				image:
					"https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",
				type: "Fighting",
			},
			{
				id: 7,
				name: "Mewtwo",
				image:
					"https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
				type: "Psychic",
			},
			{
				id: 8,
				name: "Petilil",
				image:
					"https://assets.pokemon.com/assets/cms2/img/pokedex/full/548.png",
				type: "Grass",
			},
			{
				id: 9,
				name: "Dusknoir",
				image:
					"https://assets.pokemon.com/assets/cms2/img/pokedex/full/477.png",
				type: "Ghost",
			},
			{
				id: 10,
				name: "Lycanroc",
				image:
					"https://assets.pokemon.com/assets/cms2/img/pokedex/full/745.png",
				type: "Rock",
			},
		];
	});

const mockNavigate = vi.fn();

describe("Dashboard component tests", () => {
	vi.mock("react-router-dom", () => ({
		useNavigate() {
			return mockNavigate;
		},
	}));

	beforeEach(() => {
		render(<Dashboard fetchPokemonsList={mockFetchPokemonsList} />);
	});

	it('should have a title "Dashboard"', async () => {
		const title = await screen.findByRole("heading", {
			name: "Dashboard",
		});

		expect(title).toBeInTheDocument();
	});

	it("Should have a list with 10 pokemons", async () => {
		const pokemonList = await screen.findAllByRole("listitem");

		expect(pokemonList).toHaveLength(10);
	});

	it("Should have a pokemon called Pikachu", async () => {
		const pikachu = await screen.findByText("Pikachu");

		expect(pikachu).toBeInTheDocument();
	});

	it("Should be possible to click to go to pokemon detail page", async () => {
		const link = await screen.findByText("Pikachu");
		fireEvent.click(link);

		expect(mockNavigate).toHaveBeenCalledTimes(1);
	});
});
