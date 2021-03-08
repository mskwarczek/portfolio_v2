import React from 'react';
import styled from 'styled-components';

import Canvas from 'components/Canvas';

const Hero = () => {
  return (
    <SSection id='hero'>
      <Canvas fps={60} starColor='white' backgroundColor='#232323' />
      <SContent className='content show'>
        <h1>
          Hello,{' '}
          <SSpan>
            I'm <span className='highlight'>Maciej Skwarczek</span>
          </SSpan>
          <br className='no-xxs' />
          I'm a web developer
        </h1>
        <div>
          <SButton className='button' href='#about'>
            Check out my projects
          </SButton>
        </div>
      </SContent>
    </SSection>
  );
};

export default Hero;

const SSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const SContent = styled.div`
  ${(props) => props.theme.mixins.absoluteCenter}
  width: 90vw;
  text-align: center;
  color: ${(props) => props.theme.color.primary};
`;

const SSpan = styled.span`
  display: table;
  margin: 0 auto;
  @media ${(props) => props.theme.screenSize.xs} {
    display: initial;
  }
`;

const SButton = styled.a`
  margin: 20px 10%;
  padding: 10px;
  border: 2px solid ${(props) => props.theme.color.primary};
  border-radius: 10px;
  color: ${(props) => props.theme.color.primary};
  text-decoration: none;
  transition: 0.2s linear;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.color.action};
    border-color: ${(props) => props.theme.color.action};
  }
`;
