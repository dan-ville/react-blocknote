import React, { useState } from 'react'
import uuid from 'react-uuid'

const NewNote = ({ onSaveNote }) => {

  const [noteData, setNoteData] = useState({
    id: uuid(),
    title: "New note",
    body: "",
    lastModified: Date.now(),
  });

  const handleEditField = (event) => {
    setNoteData({ 
      ...noteData, 
      [event.target.name]: event.target.value,
      lastModified: Date.now() 
    })
  }
  
  const handleSaveNote = () => {
    onSaveNote(noteData)
  }
  
  return (
    <div className="note-wrapper">
      <form className="note-form">
        <input
          type="text"
          name="title"
          className="note-title"
          placeholder="Title"
          autoComplete="off"
          onChange={(event) => handleEditField(event)}
        />
        <textarea
          name="body"
          className="note-content auto-resize"
          cols="30"
          placeholder="Write your note here..."
          onChange={(event) => handleEditField(event)}
        />
      </form>
      <div className="options">
        <button className="tags-option">Tags</button>
        <button className="color-option">Colors</button>
        <button className="delete-note">Delete</button>
        <button onClick={handleSaveNote}>Save</button>
      </div>
    </div>
  );
};

export default NewNote
