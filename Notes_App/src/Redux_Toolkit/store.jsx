import {configureStore} from '@reduxjs/toolkit'
import NotesSlice from './Features/NotesSlice'

export const store = configureStore({
    reducer: {
        notes: NotesSlice,
    },
});