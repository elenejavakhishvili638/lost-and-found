import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavbarState {
    value: string
    open: boolean
}

const initialState: NavbarState = {
    value: "all",
    open: false
}

const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        chooseCategory(state, action: PayloadAction<string>) {
            state.value = action.payload;
        },
        sidebar(state, action: PayloadAction<boolean>) {
            state.open = action.payload;
        },

    },
});

export const { chooseCategory, sidebar } = navbarSlice.actions;
export default navbarSlice.reducer;