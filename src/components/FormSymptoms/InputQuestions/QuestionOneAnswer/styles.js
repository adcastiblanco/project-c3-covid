import styled from 'styled-components'

export const ContainerAnswer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 0.9em;
    div {
    box-shadow: 0 2px 4px 0 #dbdbdb80;
    width: 40%;
    display:flex;
    border: 1px solid lightgray;
    align-items: center;
    border-radius:10px;
    cursor: pointer;
    &:hover {
        background-color: #f1f1f1;
        transition: 0.4s;
      }
    input {
      margin-left:10px;
    }
    label {
      display: block;
    width: 100%;
    padding:5px 4px;
    cursor: pointer;
  }
 }
`