import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import navbarSliceReducer from "./NavbarSlice"
import nearYouItemsSliceReducer from "./NearYouItems"
import formSliceReducer from "./FormSlice"

const store = configureStore({
    reducer: {
        navbar: navbarSliceReducer,
        nearYouItem: nearYouItemsSliceReducer,
        form: formSliceReducer,


    }
})


type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store