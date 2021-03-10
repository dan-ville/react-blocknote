import React, { useState } from 'react'

const Note = ({getNoteData}) => {
    const initialNoteData = {
        "id": Date.now(),
        "note-title": '',
        "note-content": '',
    };

    const [noteData, setNoteData] = useState(initialNoteData);

    const handleChange = (event) => {
        setNoteData({ ...noteData, [event.target.name]: event.target.value });
        getNoteData(noteData);
    };

    return (
        <div className="note-wrapper" >
            <form className="note-form">
                <input 
                    type="text" 
                    name="note-title" 
                    className="note-title" 
                    placeholder="Title" 
                    autoComplete="off" 
                    onChange={ handleChange }
                />
                <textarea 
                    name="note-content" 
                    className="note-content auto-resize" 
                    cols="30" 
                    placeholder="Write your note here..." 
                    onChange={ handleChange }
                />
            </form>
            <div className="options">
                <button className="tags-option">Tags</button>
                <button className="color-option">Colors</button>
                <button className="delete-note">Delete</button>
                <button onClick={event => getNoteData(noteData)}>Save</button>
            </div>
        </div>
    )
}

export default Note
