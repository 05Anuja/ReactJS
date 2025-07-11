import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from './Features/CounterSlice'
import FakeUserSlice from "./Features/FakeUserSlice";

export const store = configureStore({
    reducer: {
        counter: CounterSlice,
        users: FakeUserSlice
    }
})