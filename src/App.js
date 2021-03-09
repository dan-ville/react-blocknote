import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Note from './components/Note'
import NoteBoard from './components/NoteBoard';

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <Header />
      <Note />
      <p>
        Tip: Save your note by pressing <strong>ctrl + enter</strong>.
      </p>
      <NoteBoard notes={notes}/>
    </div>
  );
}

export default App;
