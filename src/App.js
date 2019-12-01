import React, { Fragment } from 'react';
import { GlobalStyles, Theme } from './globalStyles';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider theme={Theme}></ThemeProvider>
    </Fragment>
  );
}

export default App;
