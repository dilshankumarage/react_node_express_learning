import { deleteNote } from "../services/api";

function NotesList({ notes, onDelete }) {
  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          {note.text}
          <button onClick={() => {
            deleteNote(note.id);
            onDelete();
          }}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NotesList;
