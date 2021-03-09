import React from 'react'
import Note from './Note'

// TODO: Pass data from Notes array in App to Noteboard
const NoteBoard = ({notes}) => {
    return (
        <div>
            {notes.map(note => {
                //    TODO: Render notes
                
            })}
        </div>
    )
}

export default NoteBoard
