import { createGlobalStyle } from 'styled-components';

import normalize from './normalize';
import themes from './themes/index';

const getGlobalStyle = (themeName: 'base') => {
  const theme = themes[themeName];

  return createGlobalStyle`
    @import url(${theme.font.primary.url});

    ${normalize}

    * {
      box-sizing: border-box;
    }

    html {
      font-size: ${theme.font.primary.size};
      font-family: ${theme.font.primary.family};
    }

    body {
      margin: 0;
      padding: 0;
    }
    
    h1 {
      font-size: 2em;
    }
    
    h3 {
      margin: 2em auto 1.5em;
      font-weight: normal;
      color: ${theme.color.secondary};
      text-align: center;
    }

    .container {
      max-width: 1200px;
      margin: 1em auto;
      padding: .5em 1em;
    }

    .section-title {
      margin: 1.5em auto;
      font-size: 2em;
      text-align: center;
      text-transform: uppercase;
      color: ${theme.color.secondary};
      
      &::before,
      &::after {
        content: '\u00a0\u00a0\u00a0\u00a0';
        text-decoration: line-through;
        padding: 0 20px;
        @media ${theme.screenSize.xs} {
          content: '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0';
        }
      }
    }
    
    .highlight {
      color: ${theme.color.action};
    }
    
    .hidden {
      opacity: 0;
    }
    
    .show {
      animation: show .7s linear;
      animation-fill-mode: backwards;
    }
    
    .no-xxs {
      display: none;
      @media ${theme.screenSize.xs} {
        display: initial;
      }
    }
  `;
};

export default getGlobalStyle;
