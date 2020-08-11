import React from 'react';
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components'

const ItemAnswer = styled.div`
    box-shadow: 0 2px 4px 0 #dbdbdb80;
    cursor: pointer;
    padding-left: 10px;
    border: 1px solid lightgray;
    border-radius: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing:border-box;
    & label {
        height: 100%;
        display: flex;
    align-items: center;
    width: 100%;
      cursor: pointer
    }
    &:hover {
      background-color: #f1f1f1;
      transition: 0.4s;
    }
`

const QuestionItem = ({ attributes, textQuestion }) => {
    return (
        <>
            <ItemAnswer>
                <Checkbox type="checkbox" name={attributes} id={attributes} value={attributes}>
                    {textQuestion}
                </Checkbox>
            </ItemAnswer>
        </>
    );
};

export default QuestionItem;