import {createSlice} from '@reduxjs/toolkit'

const loadNotes = () => {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
};

const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

const NotesSlice = createSlice({
  name: "notes",
  initialState: {
    list: loadNotes(),
  },
  reducers: {
    addNote: (state, action) => {
      state.list.push(action.payload);
      saveNotes(state.list);
    },
    deleteNote: (state, action) => {
      state.list = state.list.filter((note) => note.id !== action.payload);
      saveNotes(state.list);
    },
    editNote: (state, action) => {
      const index = state.list.findIndex(
        (note) => note.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index].text = action.payload.text;
        saveNotes(state.list);
      }
    },
  },
});

export const { addNote, deleteNote, editNote} = NotesSlice.actions;
export default NotesSlice.reducer;