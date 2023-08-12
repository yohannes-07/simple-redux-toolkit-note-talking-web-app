import {useSelector, useDispatch} from 'react-redux'
import { SelectNotes, deleteNote } from './noteSlice'
import { Link } from 'react-router-dom';

const NotesList = () => {
    
  const dispatch = useDispatch()
  const notes = useSelector(SelectNotes)
  const handleDelete = id => {
      dispatch(deleteNote(id));
    
  };

  return (
    <section>
        <h1>Notes</h1>
        {
            notes.map((note) => (
                <article key={note.id}>
                    <h3>{note.title}</h3>
                    <p>{note.content.substring(0, 100)}</p>
                    <div className='btns'>
                        <button className='btn'><Link to={`/edit/${note.id}`}>Edit</Link></button>
                        <button className='btn' onClick={() => handleDelete(note.id)}>Delete</button>
                    </div>
                </article>
            )
            )

        }
    </section>
  )
}

export default NotesList