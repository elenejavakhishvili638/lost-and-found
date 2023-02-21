import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calculateDistance } from "../assets/calculateDistance";
import { Items } from "../types/itemsTypes";

interface NearYouItemsState {
    // latitude: number
    // longitude: number
    address: {
        latitude: number
        longitude: number
    }
    filteredItems: Items[]
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

const initialState: NearYouItemsState = {
    // latitude: 0,
    // longitude: 0,
    address: {
        latitude: 0,
        longitude: 0,
    },
    filteredItems: []
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
            // const distance: number = calculateDistance(location, items)
            // const threshold = action.payload.threshold
            state.filteredItems = items.filter((thing) => {
                const distance = calculateDistance(location.address, thing)
                // console.log(distance)
                return distance <= action.payload.threshold
                // return threshold !== undefined && distance <= threshold;
                // return typeof threshold === "number" && distance <= threshold;
            })


        }
    }
})


export const { setLatitude, setLongitude, calculateDistances } = nearYouItemsSlice.actions;
export default nearYouItemsSlice.reducer;