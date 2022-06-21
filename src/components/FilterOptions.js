import React from 'react'
import styled from 'styled-components';

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
  return (
    <OptionsDiv>
        <button title="all-tasks" className="all-tasks filter-item active">
            <i className="fa fa-list-ul" aria-hidden="true"></i>
        </button>
        <button title="unchecked-tasks" className="filter-item unchecked-tasks">
            <i className="fa fa-circle-o" aria-hidden="true"></i>
        </button>
        <button title="checked-tasks" className="filter-item checked-tasks">
            <i className="fa fa-check" aria-hidden="true"></i>
        </button>
        <div className="active-bar"></div>
    </OptionsDiv>
  )
}

export default FilterOptions