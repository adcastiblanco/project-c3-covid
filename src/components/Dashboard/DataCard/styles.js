import styled from 'styled-components'

export const GraphContainer = styled.div`
    background-color: var(--white-color);
  border-radius: 5px;
  height: 100%;
  &.one {
    grid-column:1 / 3;
  }
  &.two {
    grid-column:3 / 5;
  }
`

export const GraphTitle = styled.h3`
  width: 100%;
  font-size:15px;
  color: var(--primary-color);
  text-align: center;
`

export const GraphItem = styled.div`
  height: 80%;
  width: 80%;
  margin: 0 auto;
`