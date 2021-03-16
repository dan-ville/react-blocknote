const NoteBoard = ({notes, activeNote, setActiveNote}) => {
    const handleSetActiveNote = (noteID) => {
      setActiveNote(noteID);
      console.log(activeNote);
    };

    const handleEditField = () => {

    }

    return (
      <div id="noteboard-wrapper">
        {notes.map((note) => (
          <div
            key={note.id}
            className="note-wrapper"
            onClick={() => handleSetActiveNote(note.id)}
          >
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <div className="options">
              <button className="tags-option">Tags</button>
              <button className="color-option">Colors</button>
              <button className="delete-note">Delete</button>
            </div>
          </div>
        ))}
      </div>
    );
}

export default NoteBoard
