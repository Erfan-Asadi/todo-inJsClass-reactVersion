import React, { useContext } from 'react'
import { todoContext } from '../contexts/TodoContext'
import TodoItem from './TodoItem';
const TodosList = () => {
    const {filteredTodos} = useContext(todoContext);

  return (
    <ul style={{padding: '1px 0', background: '#fff'}}>
        {filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  )
}

export default TodosList