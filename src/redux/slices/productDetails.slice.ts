import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface iProductDetailsState {
    code: string
    selectedSKU: string
    selectedQTY: number
}

// Define the initial state using that type
const initialState: iProductDetailsState = {
    code: '',
    selectedSKU: '',
    selectedQTY: 0,
}

export const productDetailsSlice = createSlice({
    name: 'productDetails',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setCode: (state, action: PayloadAction<string>) => {
            state.code = action.payload
        },
        setQuantitySelected: (state, action: PayloadAction<number>) => {
            state.selectedQTY = action.payload
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        setSKUSelected: (state, action: PayloadAction<string>) => {
            state.selectedSKU = action.payload
        },
    },
})

export const { setQuantitySelected, setSKUSelected, setCode } = productDetailsSlice.actions

export const productDetailsReducer = productDetailsSlice.reducer
