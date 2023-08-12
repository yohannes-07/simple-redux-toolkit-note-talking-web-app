import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editNote, SelectNotes } from './noteSlice';

const EditNote = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();
  const notes = useSelector(SelectNotes);
  const note = notes.find(note => note.id === id);

  const [title, setTitle] = useState(note.title || '');
  const [content, setContent] = useState(note.content || '');

  const handleSave = () => {
    if (note) {
      dispatch(editNote({ id: note.id, title, content }));
      navigate(-1)
      
    }
  };

  return (
    <div>
      <h2>Edit Note</h2>
     
      <form>
            <input 
                type="text"
                id='noteTitle'
                name='noteTitle'
                value={title}
                onChange={e => setTitle(e.target.value)}
             />
             <textarea
                id="noteContent"
                name="noteContent"
                value={content}
                onChange={e => setContent(e.target.value)}/>

            <button
                type='button'
                onClick={handleSave}
            >
                Save
            </button>
        </form>
    </div>
  );
};

export default EditNote;
