import { PokemonTypes } from "../types/PokemonTypes";

const BASE_URL = "http://localhost:3000"

export async function fetchPokemonsList(): Promise<PokemonTypes[]> {
  const response = await fetch(`${BASE_URL}/pokemon`)
  const data = await response.json()

  return data
}

export async function fetchPokemonDetail(id: number): Promise<PokemonTypes> {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`)
    const pokemon = await response.json()
    return pokemon
}