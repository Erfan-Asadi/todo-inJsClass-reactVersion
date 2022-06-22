import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { todoContext } from '../contexts/TodoContext';

const TodoLi = styled.li`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    color: #272847;
    cursor: pointer;
    position: relative;
    background-color: #fff;
    border-top: 2.5px #DDE1E4 solid;
    
    .container-right {
        display: flex;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        align-items: center;
        gap: 20px;
    }
    .todo-options {
        display: flex;
        background-color: #e7e6f7;
        align-items: center;
        gap: 15px;
        justify-content: center;
        height: 100%;
        padding: 0;
        width: 0;
        overflow: hidden;
        transition: .3s ease-in-out;
    }
     .todo-options.expand {
        width: 80px;
        padding: 0 20px;
    }
     .fa-pen {
        font-size: 15px;
        color: #5262eb;
    }
     .fa-times {
        color: #F82525;
    }

    .container-left {
        display: flex;
        align-items: center;
        column-gap: 12px;
        padding: 24px 0;
    }

    .custom-radio {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 21px;
        width: 21px;
        border: 2px solid currentColor;
        background-color: transparent;
        border-radius: 50%;
        font-size: 13px;
        position: relative;
        color: #5262eb;
    }

    &.completed {
        opacity: .4;  
    }
    &.completed .container-right {
        pointer-events: none;
    }

    .subject { 
        font-weight: 400;
    }
    &.completed .subject {
        text-decoration: line-through;
        user-select: none;
    }

    &:not(.completed) .custom-radio::before {
        content: '';
        display: none;
    }
`;


const TodoItem = ({todo}) => {
    const {
        dispatch
    } = useContext(todoContext);
    const [expandedTodo, setExpandedTodo] = useState(false);


    function toggleTodoCompleted() {
        dispatch({
            type: 'TOGGLE_TODO',
            payload: todo.id
        })
    }

    function toggleOptions() {
        if(!todo.completed) {
            setExpandedTodo(prev => !prev)
        }
    }
    function removeTodoHandler() {
        dispatch({
            type: 'REMOVE_TODO',
            payload: todo.id
        })
    }


   return (
        <TodoLi className={todo.completed && 'completed'}>
                    <div className="container-left" onClick={toggleTodoCompleted}>
                        <span className="custom-radio fa fa-check"></span>
                        <p className="subject">{todo.title}</p>
                    </div>
                    <div className="container-right" onClick={toggleOptions}>
                        <i className="fa fa-chevron-right"></i>
                        <div className={`todo-options ${expandedTodo && 'expand'}`}>
                            <i className="fa fa-times remove-todo" onClick={removeTodoHandler}></i>
                            <i className="fa fa-pen edit-todo"></i>
                        </div>
                    </div>
        </TodoLi>
  )
}

export default TodoItem