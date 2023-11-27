import { createSlice } from "@reduxjs/toolkit";
type Total = {
    total: number
}
const initialState: Total = {
    total: 0
}


const totalSlice = createSlice({
    name: 'total',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.total += Number(action.payload)

        },
        decriment: (state, action) => {
            state.total -= Number(action.payload)

        },
        zeroTotal: (state) => {
            state.total = 0
        }
    }
})

export const { decriment, increment, zeroTotal } = totalSlice.actions;
export default totalSlice.reducer
