import React, { useState } from 'react'

export default function NoteForm({ addNote }) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title==="" || content===""){
            alert("Notes cannot be empty..")
        }else{
            addNote(title, content)
            console.log({ title, content });
            setTitle('')
            setContent('')
        }
        
    }

    return (
        <>
        
            <form onSubmit={handleSubmit}>
                    <div className="title">
                        <input type="text" placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="content">
                        <textarea rows="8" colum="20" placeholder="Type Notes..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)} />
                    </div>
                    <button className="addbtn">Add Note</button>
                </form>
        </>
    )
}
