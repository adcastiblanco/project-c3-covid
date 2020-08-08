import styled from 'styled-components'

export const DashboardContainer = styled.section`
width: 100%;
  height: 100%;
  background: #eaeaea;
  grid-gap: 1.5%;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 15% 15% 70%;
  align-content: flex-start;
  justify-content: center;
`

export const HeadingDashboard = styled.div`
  text-align: center;
  margin: 0 auto;
  grid-column: 1/ 3;
  h1 {
    font-size:16px;
  }
  p {
    font-size:14px;
  }
`