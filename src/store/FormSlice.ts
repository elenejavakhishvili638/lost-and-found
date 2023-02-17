import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Form } from "../types/formTypes";

interface FormState {
    value: Form
    // open: boolean
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
    }
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
        }
    },
});

export const { handleChange, handleImage, handleTextarea } = formSlice.actions;
export default formSlice.reducer;