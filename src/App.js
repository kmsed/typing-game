import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import TypingTemplate from './components/TypingTemplate';
import { TypingProvider } from './Context';

const App = () => {
  return (
    <>
      <TypingProvider>
        <GlobalStyle />
        <TypingTemplate />
      </TypingProvider>
    </>
  );
}

export default App;