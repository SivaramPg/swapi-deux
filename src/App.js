import React from 'react';

import GlobalStyle from './components/Styled/GlobalStyles';
import AppContainer from './containers/AppContainer';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppContainer />
    </React.Fragment>
  );
};

export default App;
