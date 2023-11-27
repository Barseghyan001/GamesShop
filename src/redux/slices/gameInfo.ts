import { GamesArray, InfiGame } from "../../types/stateGames"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchInfoGame = createAsyncThunk<GamesArray, string | undefined | number, { rejectValue: string }>(
    'games/fetchInfoGame',
    async (id, { rejectWithValue }) => {
        const res = await fetch(`https://64f465ca932537f4051a52c5.mockapi.io/games/${id}`);
        if (!res.ok) {
            return rejectWithValue('Server Error')
        }

        const data = await res.json()
        return data

    }
)




const initialState: InfiGame = {
    info: null,
    loading: false,
    error: null
}


const gamesInfoSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInfoGame.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchInfoGame.fulfilled, (state, action) => {
                state.loading = false;
                state.info = action.payload
            })
            .addCase(fetchInfoGame.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
           
    }


})

export default gamesInfoSlice.reducer