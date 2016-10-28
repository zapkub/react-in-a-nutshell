
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from "react-hot-loader";


let rootEl = document.getElementById('root');

ReactDOM.render(<AppContainer><App /></AppContainer>, rootEl);


// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    const HotApp = require("./App").default;
    ReactDOM.render(
        <AppContainer><HotApp /></AppContainer>
      ,
      rootEl
    );
  });
}