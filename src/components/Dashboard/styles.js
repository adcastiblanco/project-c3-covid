import styled from 'styled-components';
import { device } from '../../assets/styles/Breakpoints';

export const DashboardContainer = styled.section`
  width: 100%;
  height: 100%;
  grid-area: content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 16% 16% 68%;
  grid-gap: 1.5%;
  grid-template-areas:
    'title title menu menu'
    'list-label list-label list-label list-label'
    'list-graph list-graph list-graph list-graph';
  background: #eaeaea;
  @media ${device.laptop} {
    grid-template-rows: 15%;
  }
  @media ${device.tablet} {
    grid-template-rows: 9%;
  }
  @media ${device.mobileL} {
    height: fit-content;
    grid-template-rows: 80px 80px;
    grid-gap: 0;
    grid-template-areas:
      'title title title title'
      'menu menu menu menu'
      'list-label list-label list-label list-label'
      'list-graph list-graph list-graph list-graph';
  }
  @media ${device.mobileM} {
    grid-template-rows: 80px 80px 300px;
    grid-template-areas:
      'title title title title'
      'menu menu menu menu'
      'list-label list-label list-label list-label'
      'list-graph list-graph list-graph list-graph';
  }
`;

export const HeadingDashboard = styled.div`
  grid-area: title;
  text-align: center;
  margin: 0 auto;
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
