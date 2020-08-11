import styled from 'styled-components';
import { device } from '../../assets/styles/Breakpoints';

const App = styled.div`
  display: grid;
  grid-template-areas:
    'head head head head head'
    'side content content content content'
    'side footer footer footer footer';
  grid-template-rows: 55px 1fr 35px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  height: 100%;

  @media ${device.tablet} {
    grid-template-areas:
      'head head head head'
      'side side side side'
      'content content content content'
      'footer footer footer footer';
    grid-template-rows: 55px 200px 550px 35px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default App;
