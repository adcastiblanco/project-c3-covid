import styled from 'styled-components'

export const QuestionsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  .item {
    box-shadow: 0 2px 4px 0 #dbdbdb80;
    cursor: pointer;
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 5px 0;
    height: 100%;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #f1f1f1;
      transition: 0.4s;
    }
  }
`