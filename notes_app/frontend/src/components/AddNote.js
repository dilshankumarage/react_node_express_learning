import { useState } from "react";
import { addNote } from "../services/api";

function AddNote({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return;
    await addNote(text);
    setText("");
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter note"
      />
      <button>Add</button>
    </form>
  );
}

export default AddNote;
