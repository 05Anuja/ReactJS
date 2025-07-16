// src/Components/Notes.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote, editNote } from "../Redux_Toolkit/Features/NotesSlice";
import { v4 as uuid } from "uuid";

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.list);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (editId) {
      dispatch(editNote({ id: editId, text }));
      setEditId(null);
    } else {
      dispatch(addNote({ id: uuid(), text }));
    }
    setText("");
  };

  const handleEdit = (note) => {
    setText(note.text);
    setEditId(note.id);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📝 Notes App</h2>
      <input
        type="text"
        value={text}
        placeholder="Enter your note..."
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "0.5rem", width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleAddOrUpdate}>
        {editId ? "Update Note" : "Add Note"}
      </button>

      <ul style={{ marginTop: "20px" }}>
        {notes.map((note) => (
          <li key={note.id} style={{ marginBottom: "10px" }}>
            {note.text}
            <button onClick={() => handleEdit(note)} style={{ marginLeft: "10px" }}>
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteNote(note.id))}
              style={{ marginLeft: "5px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
