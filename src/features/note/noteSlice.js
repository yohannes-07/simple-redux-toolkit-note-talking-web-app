import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza."
    }
]

const noteSlice = createSlice({
    name:'notes',
    initialState,
    reducers:{
        addNote: (state = initialState, action) => {
            state.push(action.payload)
        },
        deleteNote: (state, action) => {
            return state.filter(note => note.id !== action.payload);
        },
        editNote: (state, action) => {
            const { id, title, content } = action.payload;
            const noteToEdit = state.find(note => note.id === id);
            if (noteToEdit) {
              noteToEdit.title = title;
              noteToEdit.content = content;
            }
          },

    

    }
})

export const SelectNotes = state => state.notes;
export const  {addNote, deleteNote, editNote} = noteSlice.actions;
export default noteSlice.reducer