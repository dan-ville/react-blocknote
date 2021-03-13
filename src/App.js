import { useState } from 'react';
import uuid from 'react-uuid'
import './App.css';
import Header from './components/Header';
import NewNote from './components/NewNote'
import NoteBoard from './components/NoteBoard';

function App() {
  const [notes, setNotes] = useState([]);
  
  const onSaveNote = (note) => {
    setNotes([...notes, note]);
    console.log(notes);
  }
  
  return (
    <div className="App">
      <Header />
      <NewNote onSaveNote={(note) => onSaveNote(note)} />
      <p>
        Tip: Save your note by pressing <strong>ctrl + enter</strong>.
      </p>
      <NoteBoard notes={notes} />
    </div>
  );
}

export default App;
