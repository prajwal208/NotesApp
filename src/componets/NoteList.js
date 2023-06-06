import React from 'react'
import Note from './Note'

export default function NoteList({notes,deleteNote}) {


    return (
        <>
            
            <div className="list-notes">
            {
                     notes.map((note) => {
                    return (
                    <div key={note.id}>
                        <Note note={note} deleteNote={deleteNote} />
                    </div>
                    )
                })
                
            }
            </div>
        </>
    )
}
