import { GamesArray, StateGames } from "../../types/stateGames"
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchingGames = createAsyncThunk<GamesArray[], void, { rejectValue: string }>(
    'games/fetchingGames',
    async (_, { rejectWithValue }) => {
        const res = await fetch(`https://64f465ca932537f4051a52c5.mockapi.io/games`);
        if (!res.ok) {
            return rejectWithValue('Server Error')
        }

        const data = await res.json()
        return data

    }
)




const initialState: StateGames = {
    games: [],
    loading: false,
    error: null
}


const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchingGames.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchingGames.fulfilled, (state, action) => {
                state.loading = false;
                state.games = action.payload
            })
            .addCase(fetchingGames.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
           
    }


})

export default gamesSlice.reducer