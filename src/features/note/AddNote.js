import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from './noteSlice'
import { nanoid } from '@reduxjs/toolkit'

const AddNote = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const saveNote = () => {
        if(title && content) {
            dispatch(addNote({id: nanoid(), title, content}))
            setTitle('')
            setContent('')
        }
    }

    const cansave = Boolean(title) && Boolean(content)

  return (
    <section>
        <h1>Add your note here</h1>
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
                onClick={saveNote}
                disabled={!cansave}
            >
                Save
            </button>
        </form>
    </section>
  )
}

export default AddNote