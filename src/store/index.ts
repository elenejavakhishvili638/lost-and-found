import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import navbarSliceReducer from "./NavbarSlice"
import nearYouItemsSliceReducer from "./NearYouItems"

const store = configureStore({
    reducer: {
        navbar: navbarSliceReducer,
        nearYouItem: nearYouItemsSliceReducer
    }
})


type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store