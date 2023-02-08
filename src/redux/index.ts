import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from '../services/ProductDetailService/pokemon.service'
import { productApi } from '../services/ProductDetailService/product.service'
import { pokemonDetailsReducer } from './slices/pokemonDetails.slice'
import { productDetailsReducer } from './slices/productDetails.slice'

export const store = configureStore({
    reducer: {
        productDetails: productDetailsReducer,
        pokemonDetails: pokemonDetailsReducer,
        // Add the generated reducer as a specific top-level slice.
        // Basically points the reducer path from the service to your configured reducer
        // ex - pokemonApi reducer => pokemonDetailsReducer
        [productApi.reducerPath]: productApi.reducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware, pokemonApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch