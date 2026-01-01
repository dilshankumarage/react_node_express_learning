
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Node API!" });
});

app.post("/add", (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

app.listen(5000, () => console.log("Server running on port 5000"));
