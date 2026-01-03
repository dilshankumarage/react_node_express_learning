import { useEffect, useState } from "react";
import { getNotes } from "./services/api";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div>
      <h1>📝 Notes App</h1>
      <AddNote onAdd={loadNotes} />
      <NotesList notes={notes} onDelete={loadNotes} />
    </div>
  );
}

export default App;
