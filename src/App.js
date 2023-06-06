import React, { useState,useEffect } from 'react'
import './App.css';
import NoteForm from './componets/NoteForm'
import NoteList from './componets/NoteList'

function App() {

const [notes,setNotes] = useState([])






const addNote = (title,content) => {
    const newNote = {
      id:Date.now(),
      title,
      content
    }

    setNotes([...notes,newNote])
}

const deleteNote = (id) => {
const updateNote = notes.filter((note) => note.id!==id)
setNotes(updateNote)
}

useEffect(() => {
  const storedData = localStorage.getItem('notes')
  if(storedData){
    setNotes(JSON.parse(storedData))
  }
},[])


useEffect(() => {
   localStorage.setItem('notes',JSON.stringify(notes))
},[notes])

  return (
    <>
    <h1>Notes APP</h1>
    <NoteForm addNote={addNote}/>
    <NoteList notes={notes} deleteNote={deleteNote}/>
    </>
  );
}

export default App;
