import React from "react";

//props -> todos

export function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>Tarea</li>
      ))}
    </ul>
  );
}
