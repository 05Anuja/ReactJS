import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from './Features/CounterSlice'
import FakeUserSlice from "./Features/FakeUserSlice";
import ThemeSlice from "./Features/ThemeSlice";

export const store = configureStore({
    reducer: {
        counter: CounterSlice,
        users: FakeUserSlice,
        theme: ThemeSlice,
    }
})