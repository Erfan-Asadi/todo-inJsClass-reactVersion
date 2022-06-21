import React, { createContext, useReducer, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { todoReducer } from "../reducers/todoReducer";

export const todoContext = createContext();

const initial_todos = [
  {
    title: "Buy a coffee",
    completed: false,
    canEdit: true,
    id: uuid(),
  },
  {
    title: "Read a book",
    completed: true,
    canEdit: true,
    id: uuid(),
  },
  {
    title: "Rest of react tutorial",
    completed: false,
    canEdit: true,
    id: uuid(),
  },
];

const TodoContextProvider = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, initial_todos);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(todos)
  }, [todos]);
  
  return (
    <todoContext.Provider value={{ filteredTodos, dispatch, setFilteredTodos }}>
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
