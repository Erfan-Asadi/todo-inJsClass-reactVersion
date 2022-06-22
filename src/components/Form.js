import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { todoContext } from '../contexts/TodoContext';

// const click_sound = new Audio("../../public/click-audio.mp3");
import click from '../click-audio.mp3'
const FormTag = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    transition: .3s ease-in-out;
    max-height: 0;
    padding: 0px 25px;

    &.expand {
      max-height: 110px;
      padding: 35px 25px;
    }
    
    .new-task-value {
      border: 2px solid #5262eb;
      padding: 4px 0 4px 10px;
      border-radius: 5px 0 0 5px;
      font-weight: 500;
      height: 38px;
      width: max(50%, 240px);
      outline: 0;
      transition: .3s ease-in-out;
    
  }
  .new-task-value:focus, 
  .new-task-value:focus + .add-task-button {
    border-color: #272847;
  }
  .add-task-button {
    height: 38px;
    padding: 0 13px;
    margin-left: -6px;
    border-radius: 0 5px 5px 0;
    border: 2px solid #5262eb;
    color: #fff;
    font-weight: 500;
    background-color: #5262eb;
    transition: .3s ease-in-out;
    cursor: pointer;
  }
  .add-task-button:hover {
    background-color: #272847;
  }

`;

const FormToggler = styled.button`
  position: absolute;
  top: -30px;
  right: 45px;
  width: 60px;
  height: 60px;
  background-color: #5262eb;
  color: #fff;
  z-index: 2;
  border-radius: 50%;
  border: 0;
  box-shadow: 0 3px 11px 1px rgba(82, 98, 235, .4);
  cursor: pointer;
  transition: .33s ease-in-out;

 &.active {
  background-color: #F82525;
  box-shadow: 0 3px 11px 1px rgba(248, 37, 37, 0.4);
}
 &.active i{
  transform: rotate(225deg);
}

  i {
  text-shadow: 0 1px 4px rgba(35, 35, 35, .3);
  font-size: 26px;
  transition: inherit;
}

`;

const Form = () => {
    const [isExpand, setIsExpand] = useState(false);
    const {
      dispatch
    } = useContext(todoContext);
    const [inputValue, setInputValue] = useState('');

    let isPlay = useRef(false);

    useEffect(() => {
      if (isPlay.current) {
        new Audio(click).play();
      } else {
        isPlay.current = true;
      }
    }, [isExpand])


    function handleSubmit(e) {
      e.preventDefault();
      if (inputValue !== '') {
        dispatch({
          type: 'ADD_TODO',
          payload: inputValue
        })
        setInputValue('');
      }
    }


  return (
    <FormTag className={`add-task-form ${isExpand ? 'expand' : ''}`} onSubmit={handleSubmit}>
      <FormToggler className={`form-toggler ${isExpand ? 'active' : ''}`} type='button' onClick={()=> setIsExpand(prev => !prev)}>
        <i className="fa fa-plus"></i>
      </FormToggler>

      <input type="text" value={inputValue} required className="new-task-value" onChange={(e)=> setInputValue(e.target.value)} />
      <button className="add-task-button"  type="button"> Add </button>
    </FormTag>
  )
}

export default Form