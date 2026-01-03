const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let notes = [];

// Get all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// Add a note
app.post("/notes", (req, res) => {
  const newNote = {
    id: Date.now(),
    text: req.body.text,
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Delete a note
app.delete("/notes/:id", (req, res) => {
  notes = notes.filter(note => note.id != req.params.id);
  res.json({ message: "Note deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
