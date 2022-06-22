import React, { useContext, useRef, useState } from 'react'
import styled from 'styled-components';
import { todoContext } from '../contexts/TodoContext';

const OptionsDiv = styled.div`
    padding: 25px 0 25px 25px;
    display: flex;
    column-gap: 32px;
    position: relative;
    background-color: #fff;

    .active-bar {
        position: absolute;
        bottom: -3px;
        height: 3px;
        background-color: #5262eb;
        width: 45px;
        left: 15px;
        transition: .3s ease-in-out;
        z-index: 3;
    }

    .filter-item {
        font-size: 23px;
        border: 0;
        background-color: transparent;
        cursor: pointer;
        color: #232323;
    }

    .filter-item i {
        transition: .3s ease-in-out;
    }


    .filter-item:hover i,
    .filter-item.active i {
        color: #5262eb;
    }
`;


const FilterOptions = () => {
    const {setFilterOption} = useContext(todoContext);
    const [isActive, setIsActive] = useState('all'); // initially show 'all' todos

    const activeBarDiv = useRef(null);


    const handlerFilter = (e) => {
        const target = e.currentTarget.dataset.target;
        setFilterOption(target);
        setIsActive(target)

        changeActivebarPosition(e.currentTarget)
    }
    
    const changeActivebarPosition = (clickedButton)=> {
        const item_offsetLeft = clickedButton.offsetLeft;
        const item_width = clickedButton.offsetWidth;

        activeBarDiv.current.style.left = (item_offsetLeft - Math.round(item_width / 2)) + `px`;
    }

    
  return (
    <OptionsDiv>
        <button title="all-tasks" className={`filter-item all-tasks ${isActive === 'all' && 'active'}`} data-target="all" onClick={handlerFilter}>
            <i className="fa fa-list-ul" aria-hidden="true"></i>
        </button>
        <button title="unchecked-tasks" className={`filter-item unchecked-tasks ${isActive === 'uncompleted' && 'active'}`} data-target="uncompleted" onClick={handlerFilter}>
            <i className="fa fa-circle-o" aria-hidden="true"></i>
        </button>
        <button title="checked-tasks" className={`filter-item checked-tasks ${isActive === 'completed' && 'active'}`} data-target="completed" onClick={handlerFilter}>
            <i className="fa fa-check" aria-hidden="true"></i>
        </button>
        <div className="active-bar" ref={activeBarDiv}></div>
    </OptionsDiv>
  )
}

export default FilterOptions