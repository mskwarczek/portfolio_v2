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
          <span className='cut'>
            I'm <span className='highlight'>Maciej Skwarczek</span>
          </span>
          <br className='no-xs' />
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  text-align: center;
  color: #fff;
  @media (max-width: 379px) {
    .cut {
      display: table;
      margin: 0 auto;
    }
  }
`;

const SButton = styled.a`
  margin: 20px 10%;
  padding: 10px;
  // border: 2px solid $color-primary;
  border-radius: 10px;
  // color: $color-primary;
  text-decoration: none;
  -webkit-transition: 0.2s linear;
  transition: 0.2s linear;

  &:hover {
    cursor: pointer;
    // background-color: $color-highlight;
    // border-color: $color-highlight;
  }
`;
