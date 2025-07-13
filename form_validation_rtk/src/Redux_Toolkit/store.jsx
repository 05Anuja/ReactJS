import { configureStore } from "@reduxjs/toolkit";
import FormSlice from './Features/FormSlice'

const store = configureStore({
    reducer: {
        Form: FormSlice,
    }
});

export default store;