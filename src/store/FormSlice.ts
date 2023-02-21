import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { items } from "../assets/data/items";
import { Form } from "../types/formTypes";
import { Items } from "../types/itemsTypes";

interface FormState {
    value: Form
    // open: boolean
    itemsList: Items[]
}

const initialState: FormState = {
    value: {
        id: "",
        title: "",
        lost_date: "",
        other: "",
        description: "",
        location: "",
        image: "",
        address: {
            longitude: 0,
            latitude: 0,
        }
    },
    itemsList: items
}

// interface FormPayload {
//     name: string
//     value: string
// }

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        handleChange(state, action: PayloadAction<{ name: string, value: string | undefined }>) {
            const { name, value } = action.payload
            state.value = {
                ...state.value,
                [name]: value
            }
            console.log(state.value)

        },
        handleImage(state, action: PayloadAction<File | string>) {

            state.value = {
                ...state.value,
                image: action.payload
            }
            console.log(state.value)
        },
        handleTextarea(state, action: PayloadAction<{ name: string, value: string | undefined }>) {
            const { name, value } = action.payload
            state.value = {
                ...state.value,
                [name]: value
            }
        },
        handleSubmition(state, action: PayloadAction<Items>) {
            // const proxy = new Proxy(state.itemsList);
            state.itemsList = [...state.itemsList, action.payload]
            console.log(state.itemsList)
        }
    },
});

export const { handleChange, handleImage, handleTextarea, handleSubmition } = formSlice.actions;
export default formSlice.reducer;