import React from 'react';
import styled, { useTheme } from 'styled-components';

import { ITheme } from 'styles/themes';
import Canvas from 'components/Canvas';
import ButtonLink from 'components/ButtonLink';

const Hero = () => {
  const theme = useTheme() as ITheme;

  return (
    <SSection id='hero'>
      <Canvas
        fps={60}
        starColor={theme.color.primary}
        backgroundColor={theme.color.secondary}
      />
      <SContent className='show'>
        <h1>
          Hello,{' '}
          <SSpan>
            I'm <span className='highlight'>Maciej Skwarczek</span>
          </SSpan>
          <br className='no-xxs' />
          I'm a web developer
        </h1>
        <div>
          <ButtonLink text='Check out my projects' link='#about' />
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
