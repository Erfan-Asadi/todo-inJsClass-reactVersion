import React from 'react'
import TodosList from './TodosList'
import Status from './Status';
import styled from 'styled-components';
import FilterOptions from './FilterOptions';

const TodoDiv = styled.div`
  width: clamp(480px, 55vw, 675px);
  border-radius: 6px;
  box-shadow: 0 4px 5px rgba(35, 35, 35, .2);
  overflow: hidden;
  background-color: #DDE1E4;

  @media screen and (max-width: 520px) {
        width: 90vw !important;
  }
  @media screen and (max-height: 540px) {
        margin: 15px;
  }

`;
const Todo = () => {
  return (
    <TodoDiv>
        <Status />
        <FilterOptions />
        <TodosList />
    </TodoDiv>
  )
}

export default Todo