import React, { useState } from "react";
import TodoList from "./TodoList.js";

function App() {
  const [todos, setTodos] = useState([]); // State to hold todos
  const [input, setInput] = useState(""); // State for input field

  // Add new todo
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput(""); // clear input
    }
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
      <h1>Todo App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
