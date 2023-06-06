import React from 'react'

export default function Note({ note, deleteNote }) {
    

    return (
        <>
            <div className="list-note">
                <div className="notes-container">
                    <div className="notes-box">
                        <h3>Title: {note.title}</h3>
                        <p style={{ width: "200px" }}>{note.content}</p>
                        </div>
                    <button onClick={() => deleteNote(note.id)} className="deletebtn">delete</button>
                </div>
            </div>
        </>
    )
}
