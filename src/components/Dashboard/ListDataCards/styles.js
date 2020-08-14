import styled from 'styled-components';
import { device } from '../../../assets/styles/Breakpoints';

const ListDataCards = styled.div`
  grid-area: list-graph;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  @media ${device.mobileL} {
    flex-wrap: wrap;
    height: 700px;
    margin: 0 auto;
    background: #eaeaea;
  }
  @media ${device.mobileL} {
    width: 90%;
  }
`;

export default ListDataCards;
