import styled from 'styled-components';
import { device } from '../../../assets/styles/Breakpoints';

const ListLabels = styled.div`
  grid-area: list-label;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media ${device.mobileL} {
    width: 90%;
    margin: 0 auto;
  }
`;

export default ListLabels;
