import { createSlice } from '@reduxjs/toolkit'

type StateInitial = {
    open: boolean
}

const initialState: StateInitial = {
    open: false
}

const openSlice = createSlice({
    name: 'drawer',
    initialState,
    reducers: {
        openDrawer: (state) => {
            state.open = !state.open
        }

    }
}

)

export const {openDrawer} = openSlice.actions;
export default openSlice.reducer