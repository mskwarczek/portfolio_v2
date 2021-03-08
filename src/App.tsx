import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from 'styles/themes';
import getGlobalStyle from 'styles/globalStyle';
import Hero from 'sections/Hero';

const App = () => {
  const changeTheme = (newTheme: 'base' = 'base') => {
    const GlobalStyle = getGlobalStyle(newTheme);
    const theme = themes[newTheme];
    return {
      GlobalStyle,
      theme,
    };
  };

  const [activeTheme, setActiveTheme] = useState(changeTheme());

  return (
    <div className='App'>
      <activeTheme.GlobalStyle />
      <ThemeProvider theme={activeTheme.theme}>
        <Hero />
      </ThemeProvider>
    </div>
  );
};

export default App;
