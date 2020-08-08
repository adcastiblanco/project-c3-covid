import React from 'react';

import styled from 'styled-components'

const ItemAnswer = styled.div`
    box-shadow: 0 2px 4px 0 #dbdbdb80;
    cursor: pointer;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 5px 0;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing:border-box;
    &:hover {
      background-color: #f1f1f1;
      transition: 0.4s;
    }
`

const QuestionItem = ({ attributes, textQuestion }) => {
    return (
        <>
            <ItemAnswer>
                <input type="checkbox" name={attributes} value={attributes} />
                <label htmlFor={attributes}>{textQuestion}</label><br />
            </ItemAnswer>
        </>
    );
};

export default QuestionItem;