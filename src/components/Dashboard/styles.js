import styled from 'styled-components';
import { device } from '../../assets/styles/Breakpoints';

export const DashboardContainer = styled.section`
  width: 100%;
  height: 100%;
  background: #eaeaea;
  grid-gap: 1.5%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 15% 15% 70%;
  align-content: flex-start;
  justify-content: center;
  @media ${device.tablet} {
    grid-template-columns: repeat();
  }
`;

export const HeadingDashboard = styled.div`
  text-align: center;
  margin: 0 auto;
  grid-column: 1/ 3;
  span {
    background: -webkit-linear-gradient(
      left,
      rgba(255, 46, 99, 1) 0%,
      rgba(255, 0, 68, 1) 0%,
      rgba(255, 0, 68, 1) 18%,
      rgba(255, 64, 115, 1) 38%,
      rgba(54, 199, 197, 1) 59%,
      rgba(8, 194, 191, 1) 84%,
      rgba(8, 194, 191, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h1 {
    font-size: 1.25em;
    margin: 0.9em 0 0;
  }
  p {
    font-size: 16px;
    margin: 0;
    font-weight: bold;
  }
`;
