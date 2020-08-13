import styled from 'styled-components';
import { device } from '../../../assets/styles/Breakpoints';

export const GraphContainer = styled.div`
  background-color: var(--white-color);
  border-radius: 5px;
  width: 355px;
  @media ${device.tablet} {
    height: 380px;
    width: 80%;
    margin: 20px auto;
  }
  @media ${device.mobileL} {
    height: 380px;
    width: 80%;
    margin: 10px auto 0;
  }
`;

export const GraphTitle = styled.h3`
  width: 100%;
  font-size: 15px;
  color: var(--primary-color);
  text-align: center;
`;

export const GraphItem = styled.div`
  height: 80%;
  width: 80%;
  margin: 0 auto;
`;
