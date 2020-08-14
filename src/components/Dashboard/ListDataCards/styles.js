import styled from 'styled-components';
import { device } from '../../../assets/styles/Breakpoints';

const ListDataCards = styled.div`
  grid-area: list-graph;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media ${device.mobileL} {
    height: 700px;
    margin: 0 auto;
    background: #eaeaea;
  }
  @media ${device.mobileL} {
    width: 90%;
  }
`;

export default ListDataCards;
