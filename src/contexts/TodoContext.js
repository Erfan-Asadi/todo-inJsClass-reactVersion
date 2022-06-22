import React, { createContext, useReducer, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { todoReducer } from "../reducers/todoReducer";

export const todoContext = createContext();

const initial_todos = [
  {
    title: "Buy a coffee",
    completed: false,
    id: uuid(),
  },
  {
    title: "Read a book",
    completed: true,
    id: uuid(),
  },
  {
    title: "Rest of react tutorial",
    completed: false,
    id: uuid(),
  },
];

const TodoContextProvider = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, initial_todos);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [filterOption, setFilterOption] = useState('all');
  
  useEffect(() => {
    setFilteredTodos(todos)
  }, [todos]);

  function handlerFilteTodos() {
      switch(filterOption) {
        case 'completed':
          const completedTodos = todos.filter(todo => todo.completed);
          setFilteredTodos(completedTodos);
          break;
        case 'uncompleted':
          const unCompletedTodos = todos.filter(todo => !todo.completed);
          setFilteredTodos(unCompletedTodos);
          break;
        default: 
          setFilteredTodos(todos)
      }
  }
  // eslint-disable-next-line
  useEffect(handlerFilteTodos, [filterOption])
  
  return (
    <todoContext.Provider value={{ filteredTodos, dispatch, setFilterOption, todos }}>
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
