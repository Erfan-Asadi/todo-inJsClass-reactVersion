import React from 'react'
import TodosList from './TodosList'
import Status from './Status';
import styled from 'styled-components';
import FilterOptions from './FilterOptions';
import Form from './Form';

const TodoDiv = styled.div`
  width: clamp(480px, 55vw, 675px);
  border-radius: 6px;
  box-shadow: 0 4px 5px rgba(35, 35, 35, .2);
  overflow: hidden;
  background-color: #DDE1E4;
  margin-top: 65px;

  @media screen and (max-width: 520px) {
        width: 90vw !important;
        margin-top: 40px
  }
  @media screen and (max-height: 540px) {
        margin: 15px;
  }

`;
const Todo = () => {
  return (
    <TodoDiv>
        <Status />
        <Form />
        <FilterOptions />
        <TodosList />
    </TodoDiv>
  )
}

export default Todo