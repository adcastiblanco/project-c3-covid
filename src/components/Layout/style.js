import styled from 'styled-components';

const App = styled.div`
  display: grid;
  grid-template-areas:
    'head head head head head'
    'side content content content content'
    'side footer footer footer footer';
  grid-template-rows: 55px 1fr 35px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: #eaeaea;
  height: 100%;
`;

export default App;
