import React, { useContext } from 'react'
import styled from 'styled-components';
import { todoContext } from '../contexts/TodoContext';

const StatusTag = styled.div `
  .todo__screen {
    height: 190px;
    position: relative;
    background-color: #B3B7FF;
    padding-left: 64px;
    display: flex;
    align-items: center;
    box-shadow: inset 0 -1.5px 2px rgba(35, 35, 35, 0.15);
  }

  .todo__screen>div {
    width: fit-content;
    display: inline-flex;
    justify-content: center;
    flex-flow: column wrap;
    color: #fff;
    gap: 2px 7px;
    height: 85px;
    text-shadow: 0 0 4px rgba(35, 35, 35, .15);
  }
  .todo__screen .completed-task-count {
    font-size: 78px;
    font-weight: 500;
    height: 100%;
  }

  .todo__screen .title {
    font-size: 30px;
    font-weight: 600;
  }

  .todo__screen .all-tasks-count {
    margin-bottom: -8px;
    font-weight: 500;
    font-size: 23px;
  }
`;
const Status = () => {
  const {filteredTodos} = useContext(todoContext);
  const completedTodos = filteredTodos.filter(todo => todo.completed );

  return (
    <StatusTag>
      <div className="todo__screen">
            <div>
                <h2 className="completed-task-count">{completedTodos.length}</h2>
                <h3 className="title">Tasks</h3>
                <h3 className="all-tasks-count">/ {filteredTodos.length}</h3>
            </div>
            
        </div>
    </StatusTag>
  )
}

export default Status