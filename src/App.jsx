import React, { Fragment, useState } from "react";
import { TodoList } from "./components/TodoList";

export function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "tarea 1", completed: false },
  ]);
  return (
    <Fragment>
      <TodoList todos={todos} />
      <input type="text" placeholder="Nueva tarea" />
      <button>+</button>
      <button></button>
      <button>boton uno</button>
      <button>boton dos</button>
    </Fragment>
  );
}
