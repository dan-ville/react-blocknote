import React, { useEffect, useState } from 'react'
import uuid from 'react-uuid'

const NewNote = ({ onSaveNote }) => {

  const initialNoteData = {
    id: uuid(),
    title: "",
    body: "",
    lastModified: Date.now(),
  };

  const [noteData, setNoteData] = useState(initialNoteData);

  const handleEditField = (event) => {
    setNoteData({ 
      ...noteData, 
      [event.target.name]: event.target.value,
      lastModified: Date.now() 
    })
  };
  
  const handleOnSaveNote = () => {
    onSaveNote(noteData);

    setNoteData({
      id: uuid(),
      title: "",
      body: "",
    });
  };
  
  const handleAutoResizeInput = (element, defaultHeight) => {
    if (element) {
      const target = element.target ? element.target : element;
      target.style.height = defaultHeight;
      target.style.height = `${target.scrollHeight}px`;
    }
  };

 
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
          onChange={(event) => {
            handleEditField(event);
            handleAutoResizeInput(event.target, '50px')
          }}
        />
      </form>
      <div className="options">
        <button className="tags-option">Tags</button>
        <button className="color-option">Colors</button>
        <button className="delete-note">Delete</button>
        <button onClick={handleOnSaveNote}>Save</button>
      </div>
    </div>
  );
};

export default NewNote
