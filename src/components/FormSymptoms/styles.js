import styled from 'styled-components'

export const RegisterSymptoms = styled.section`
  height:100%;
  width: 100%;
  padding: 2%;
  border-radius: 5px;
  box-sizing: border-box;
`

export const Form = styled.form`
  width: 100%;
  background-color: var(--white-color);
  height: fit-content;
  box-sizing:border-box;
  padding: 2% 5%;
  p {
    font-weight: bold;
  }
  & .show {
    display: block !important;
  }
  & .symptoms-check {
  display: none;
  }
`

export const ButtonSymptoms = styled.button`
margin: 2% auto 0;
  background-color: var(--primary-color);
  border: 1px solid lightgrey;
  padding: 10px 20px;
  width: 60%;
  border-radius: 10px;
  color: white;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  display:none;
  &:hover {
    background-color: var(--cian-color-C3);
    transition: 0.4s;
  }
  &.symptoms-send {
    display:none;
  }
`