import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ItemsGames, StateItems } from '../../types/itemsDrawer'

export const fetchingItems = createAsyncThunk<ItemsGames[], void, { rejectValue: string }>(
    'items/fetchingItems',
    async (_, { rejectWithValue }) => {
        const res = await fetch(`https://6547d32b902874dff3acc9d9.mockapi.io/addgames`);
        if (!res.ok) {
            return rejectWithValue('Server Error')
        }

        const data = await res.json()
        return data

    }
)

export const addFetchingItems = createAsyncThunk<any, any, { rejectValue: string, }>(
    'items/addFetchingItems',
    async (obj, { rejectWithValue }) => {
      
       

            const res = await fetch(`https://6547d32b902874dff3acc9d9.mockapi.io/addgames`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: obj.id,
                    title: obj.title,
                    price: obj.price,
                    img: obj.img
                })
            })
            if (!res.ok) {
                throw rejectWithValue('Server Error')
            }
            return (await res.json()) as ItemsGames
        

       
    }
)

export const deleteItems = createAsyncThunk<string | number | undefined, string | number | undefined, { rejectValue: string }>(
    'items/deleteItems',
    async (id, { rejectWithValue }) => {
        const res = await fetch(`https://6547d32b902874dff3acc9d9.mockapi.io/addgames/${id}`, {
            method: 'DELETE'
        })

        if (!res.ok) {
            return rejectWithValue('server Error')
        }
        return id

    }
)
export const deleteAll = createAsyncThunk<any, any>(
    'items/deleteAll',
    async (id) => {
        await fetch(`https://6547d32b902874dff3acc9d9.mockapi.io/addgames/${id}`, {
            method: 'DELETE',
            body:JSON.stringify({
                id:id
            })
        })

        return id

    }

)


const initialState: StateItems = {
    items: [],
    loading: false,
    error: null
}

const itemsDrawerSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchingItems.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchingItems.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(fetchingItems.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(addFetchingItems.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(addFetchingItems.fulfilled, (state, action) => {
                state.loading = false
                state.items.push(action.payload)
            })
            .addCase(addFetchingItems.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(deleteItems.fulfilled, (state, action) => {
                state.items = state.items.filter((item) => item.id !== action.payload)
            })
            .addCase(deleteAll.fulfilled, (state) => {
                state.items = []
            })
    }
})

export default itemsDrawerSlice.reducer