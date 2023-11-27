import { createSlice } from '@reduxjs/toolkit'

type StateInitial = {
    openModal: boolean
}

const initialState: StateInitial = {
    openModal: false
}

const openSlice = createSlice({
    name: 'Modal',
    initialState,
    reducers: {
        openModalHandler: (state) => {
            state.openModal = !state.openModal
        },
        openMod:(state) =>{
            state.openModal = true
        }

    }
}

)

export const {openModalHandler,openMod} = openSlice.actions;
export default openSlice.reducer