import styled from 'styled-components';
import { device } from '../../../assets/styles/Breakpoints';

export const GraphContainer = styled.div`
  background-color: var(--white-color);
  border-radius: 5px;
  width: 355px;
  @media ${device.laptopL} {
    width: 480px;
  }
  @media ${device.laptop} {
    width: 360px;
    margin: 20px auto;
  }
  @media ${device.tablet} {
    width: 360px;
    height: 90%;
    margin: 20px auto;
  }
  @media ${device.mobileL} {
    width: 80%;
    height: 45%;
    margin: auto 0;
    margin-top: 5%;
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
