import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleComplete }) {
  if (todos.length === 0) return <p>No todos yet!</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
