import { configureStore } from "@reduxjs/toolkit";
import openDrawerReducer from './slices/openDrawerSlice'
import gamesReducer from './slices/gamesContent'
import infoReducer from './slices/gameInfo'
import openModalReducer from './slices/openModal'
import itemsReducers from './slices/itemsDrawer'
import totalReducer from './slices/total'


export const store = configureStore({
    reducer: {
        openD: openDrawerReducer,
        game:gamesReducer,
        info:infoReducer,
        openModal:openModalReducer,
        items:itemsReducers,
        total:totalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch