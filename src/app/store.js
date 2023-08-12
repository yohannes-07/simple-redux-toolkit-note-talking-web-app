import noteSlice from "../features/note/noteSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        notes: noteSlice
    }
})