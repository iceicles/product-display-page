// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { iPokemonData } from '../../redux/models/pokemon.interface'

const API_BASE_URL = 'https://pokeapi.co/api/v2/'
const API_ENDPOINT_POKEMON_NAME = 'pokemon'

export const pokemonApi = createApi({
    // Unique key for service in redux store (in dev tools Redux tab, key will start with reducerPath)
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: builder => ({
        getPokemonByName: builder.query<iPokemonData, string>({
            query: name => `${API_ENDPOINT_POKEMON_NAME}/${name}`,
        }),
    }),
})

// export hooks for usage in function components
// these hooks are auto-generated based on the defined endpoints
// hooks such as: isLoading, data, error, etc
export const { useGetPokemonByNameQuery } = pokemonApi

// Notes: -
/* 
with RTKQ we only need to provide one base url for multiple endpoints.
    - this means API endpoint definitions with the same base URL are kept in the same file
*/

/* TODO:
use queryFn to attach multiple endpoints to the same base URL
resource - https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#performing-multiple-requests-with-a-single-query
// would like to call the below after getting the pokemon name has been called

getPokemonAbility: builder.query<iPokemonData, string>({
    query: name => `${API_ENDPOINT_POKEMON_ABILITY}/${name}`,
}),
*/
