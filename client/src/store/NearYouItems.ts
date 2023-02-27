import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calculateDistance } from "../assets/calculateDistance";
import { Items } from "../types/itemsTypes";

interface NearYouItemsState {
    address: {
        latitude: number
        longitude: number
    }
    filteredItems: Items[]
    // handleClick: () => void
    // threshold: number
}

interface Location {
    address: {
        latitude: number
        longitude: number
    }
}

// interface LocationPayload {
//     location: Location
//     items: Items[]
// }

interface LocationPayloadAction {
    // payload: LocationPayload
    threshold: number
    location: Location
    items: Items[]
}

// interface functionPayload {
//     handleClick: () => void
// }

const initialState: NearYouItemsState = {
    address: {
        latitude: 0,
        longitude: 0,
    },
    filteredItems: [],
    // handleClick: () => { },
    // threshold: 1000
}


const nearYouItemsSlice = createSlice({
    name: "nearYouItem",
    initialState,
    reducers: {
        setLatitude(state, action: PayloadAction<number>) {
            state.address.latitude = action.payload;
        },
        setLongitude(state, action: PayloadAction<number>) {
            state.address.longitude = action.payload;
        },
        calculateDistances(state: NearYouItemsState, action: PayloadAction<LocationPayloadAction>) {
            const { location, items } = action.payload

            state.filteredItems = items.filter((thing) => {
                const distance = calculateDistance(location.address, thing)
                return distance <= action.payload.threshold
            })
        },
        // setThreshold(state, action: PayloadAction<number>) {
        //     state.threshold = action.payload
        //     console.log(state.threshold)
        // }
        // handleClick(state, action: PayloadAction<functionPayload>) {
        //     state.handleClick = action.payload.handleClick
        //     console.log(action)
        //     // state.threshold = action.payload
        // }
    }
})


export const { setLatitude, setLongitude, calculateDistances } = nearYouItemsSlice.actions;
export default nearYouItemsSlice.reducer;