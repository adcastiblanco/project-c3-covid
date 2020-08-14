import React from 'react';

import { Avatar, Card } from 'antd';

import { CardContainer } from './styles';
const { Meta } = Card;

import masterBadge from '../../assets/images/masterbadge.png';

import { LinkedinFilled, GithubFilled } from '@ant-design/icons';

const CardAboutUs = ({ photo, name, role, github, linkedin }) => {
  return (
    <>
      <CardContainer
        cover={<img alt="example" src={photo} styles="object-fit:contain;" />}
        actions={[
          <a href={linkedin} target="_blank">
            <LinkedinFilled key="linkedin" />,
          </a>,
          <a href={github} target="_blank">
            <GithubFilled key="github" />,
          </a>,
        ]}
      >
        <Meta
          avatar={<Avatar src={masterBadge} />}
          title={name}
          description={role}
        />
      </CardContainer>
    </>
  );
};

export default CardAboutUs;
