import styled from 'styled-components'

export const ContainerAnswer = styled.div`
  display: flex;
  justify-content: space-evenly;
    div {
    width: 40%;
    display:flex;
    border: 1px solid darkgray;
    align-items: center;
    border-radius:5px;
    label {
      width: 100%;
      display: block;
      cursor: pointer;
      margin: 5px;
      font-weight:bold;
    }
    &:hover {
        background-color: #f1f1f1;
        transition: 0.4s;
      }
  }
`