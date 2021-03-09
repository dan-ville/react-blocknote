import React, { useState } from 'react'

const Note = () => {
    const [isActive, setIsActive] = useState(false)
    const [noteData, setNoteData] = useState({})

    // TODO: Pass data from Note UP to App to be used in NoteBoard
    
    return (
        <div className="note-wrapper" >
            <form className="note-form">
                <input type="text" name="note-title" className="note-title" placeholder="Title" autoComplete="off" />
                <textarea name="note-content" className="note-content auto-resize" cols="30" placeholder="Write your note here..." ></textarea>
            </form>
            <div className="options">
                <button className="tags-option">Tags</button>
                <button className="color-option">Colors</button>
                <button className="delete-note">Delete</button>
                <button >Save</button>
            </div>
        </div>
    )
}

export default Note
