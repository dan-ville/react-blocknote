import React from 'react'

const NoteBoard = ({notes}) => {
    return (
        <div id="noteboard-wrapper">
            {notes.map(note => (
                <div id={note.id} className="note-wrapper">
                    <h2>{note.title}</h2>
                    <p>{note.body}</p>
                </div>
                
            ))}
        </div>
    )
}

export default NoteBoard
