import styled from 'styled-components';
import { device } from '../../../assets/styles/Breakpoints';

const ListDataCards = styled.div`
  grid-area: list-graph;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* @media ${device.mobileL} {
    width: 80%;
    margin: 0 auto;
  } */
`;

export default ListDataCards;
