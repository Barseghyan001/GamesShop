import { useAppDispatch, useAppSelector } from "./typsRedux";
import { decriment, increment } from "../redux/slices/total";
import { useCallback } from 'react'

export const useTotal = (initialState:number | string| undefined) => {
    const dispatch = useAppDispatch()
    const { total } = useAppSelector(state => state.total);
    const plusHandler = useCallback(() => {
        dispatch(increment(initialState))

    }, [dispatch])
    const minusHandler = useCallback(() => {
        dispatch(decriment(initialState))
    },[dispatch])
    return {plusHandler,minusHandler,total}

}