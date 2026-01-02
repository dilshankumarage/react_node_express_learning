import React from "react";

function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 0",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: todo.completed ? "#d4edda" : "#f8d7da",
      }}
    >
      <span
        onClick={() => toggleComplete(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          flex: 1,
          textAlign: "left",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
