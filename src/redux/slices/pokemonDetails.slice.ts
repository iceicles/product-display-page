import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { iPokemonAbilities, iPokemonSpecie, iPokemonSprites } from '../models/pokemon.interface'

// Type definition of slice state
interface iPokemonDetailsState {
    specie: iPokemonSpecie
    sprite: iPokemonSprites
    abilities: iPokemonAbilities
}

// Initial state slice
const initialState: iPokemonDetailsState = {
    specie: {},
    sprite: {},
    abilities: {},
} as iPokemonDetailsState

export const pokemonDetailsSlice = createSlice({
    name: 'pokemonDetails',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setSpecie: (state, action: PayloadAction<iPokemonSpecie>) => {
            state.specie = action.payload
        },
        setSprite: (state, action: PayloadAction<iPokemonSprites>) => {
            state.sprite = action.payload
        },
        setAbilities: (state, action: PayloadAction<iPokemonAbilities>) => {
            state.abilities = action.payload
        },
    },
})

// destructure action types from actions - can be called in components
// can be called directly in components using dispatch() hook, however, there is a better way - typed hooks! 😃
export const { setSpecie, setSprite, setAbilities } = pokemonDetailsSlice.actions

export const pokemonDetailsReducer = pokemonDetailsSlice.reducer

/* Notes -  
Steps (in order of development): 
- setup slice
- defined type selectors
- setup service
- add service to store 
- then provide reduce store to rest of app (<Provider store = {store}>...)
- finally use typed hook (data, isLoading, or error and so on) states to manage UI behavior

Notes: 
- defining PayloadAction<> in the reducers eliminates the need to have a separate folder called actionCreators
    - the generated action creators will be correctly typed to accept a payload with the provided argument <T>

*/
