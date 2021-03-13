import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewNote from './components/NewNote'
import NoteBoard from './components/NoteBoard';

function App() {
  const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const onSaveNote = (note) => {
    setNotes([note, ...notes]);
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
