import React from 'react';
import { Row } from 'antd';

import CardAboutUs from '../components/CardAboutUs';

import photoLuis from '../assets/images/luis.png';
import photoJulian from '../assets/images/julian.png';
import photoAngel from '../assets/images/angel.png';

import styled from 'styled-components';

const RowContainer = styled(Row)`
  justify-content: space-around;
`;

const AboutUs = () => {
  return (
    <RowContainer className="content-container">
      <CardAboutUs
        role="Frontend Developer"
        name="Angel Castiblanco"
        photo={photoAngel}
        github="https://github.com/adcastiblanco"
        linkedin="https://www.linkedin.com/in/angel-david-castiblanco-sepulveda-816703150"
      />
      <CardAboutUs
        role="Backend Developer"
        name="Luis Lazcano"
        photo={photoLuis}
        github="https://github.com/Luis-Lazcano"
        linkedin="https://www.linkedin.com/in/luis-alberto-lazcano-9422b516a"
      />
      <CardAboutUs
        role="FullStack Developer"
        name="Julian Builes"
        photo={photoJulian}
        github="https://github.com/juanchobuiles"
        linkedin="https://co.linkedin.com/in/juanchobuiles"
      />
    </RowContainer>
  );
};

export default AboutUs;
