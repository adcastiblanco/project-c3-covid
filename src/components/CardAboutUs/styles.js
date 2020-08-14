import styled from 'styled-components';
import { Card } from 'antd';

import { device } from '../../assets/styles/Breakpoints';

export const CardContainer = styled(Card)`
  width: 300px;
  margin-top: 1.5%;
  height: 400px;
  @media ${device.laptop} {
    width: 250px;
  }
`;
