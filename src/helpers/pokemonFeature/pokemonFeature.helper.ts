import { Pokemon } from '../../components/PokemonFeature/PokemonName.type'

/**
 * Gets a random pokemon
 * @return {number} random pokemon
 */
export const randomPokemon = (): number => {
    return Math.floor(Math.random() * Pokemon.names.length)
}
