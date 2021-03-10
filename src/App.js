import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Note from './components/Note'
import NoteBoard from './components/NoteBoard';

function App() {
  const [notes, setNotes] = useState([]);

  const getNoteData = (noteData) => {
    console.log(noteData);
  }
  
  // TODO: Create a handler function that will only save data & set notes when save button is clicked in a Note component
  
  return (
    <div className="App">
      <Header />
      <Note getNoteData={(event) => getNoteData(event)} />

      <p>
        Tip: Save your note by pressing <strong>ctrl + enter</strong>.
      </p>
      {/* <NoteBoard notes={notes} /> */}
    </div>
  );
}

export default App;
