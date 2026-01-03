const API_URL = process.env.REACT_APP_API_URL;

export const getNotes = async () => {
  const res = await fetch(`${API_URL}/notes`);
  return res.json();
};

export const addNote = async (text) => {
  const res = await fetch(`${API_URL}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return res.json();
};

export const deleteNote = async (id) => {
  await fetch(`${API_URL}/notes/${id}`, {
    method: "DELETE",
  });
};
