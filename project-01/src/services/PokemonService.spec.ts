import { PokemonTypes } from "../types/PokemonTypes";
import { fetchPokemonsList, fetchPokemonDetail } from "./PokemonService";

globalThis.fetch = vi.fn();

function createFetchResponse(data: PokemonTypes | PokemonTypes[]) {
  return {
    json: () => Promise.resolve(data),
  };
}

describe("PokemonService", () => {
  describe("fetchPokemonsList", () => {
    it("Should fetch the list of pokemons from the correct endpoint", async () => {
      const pokemonListResponse: PokemonTypes[] = [
        {
          id: 1,
          name: "bulbasaur",
          image: "https://pokeapi.co/api/v2/pokemon/1/",
          type: "grass",
        },
        {
          id: 2,
          name: "ivysaur",
          image: "https://pokeapi.co/api/v2/pokemon/2/",
          type: "grass",
        },
        {
          id: 3,
          name: "venusaur",
          image: "https://pokeapi.co/api/v2/pokemon/3/",
          type: "grass",
        },
      ];

      fetch.mockResolvedValue(createFetchResponse(pokemonListResponse));

      const pokemonList = await fetchPokemonsList();

      expect(fetch).toHaveBeenCalledWith("http://localhost:3000/pokemon");
      expect(pokemonList).toStrictEqual(pokemonListResponse);
    });

    it("should fetch the details of a pokemon from the correct endpoint", async () => {
      const pokemonDetailResponse: PokemonTypes = {
        id: 1,
        name: "Pikachu",
        image: "https://pokeapi.co/api/v2/pokemon/1/",
        type: "grass",
      };

      fetch.mockResolvedValue(createFetchResponse(pokemonDetailResponse));

      const pokemonDetail = await fetchPokemonDetail(1);

      expect(fetch).toHaveBeenCalledWith("http://localhost:3000/pokemon/1");
      expect(pokemonDetail).toStrictEqual(pokemonDetailResponse);
    });
  });
});