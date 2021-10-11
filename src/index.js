import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

// Styles
import './index.css';

// Components
import App from './containers/app/app.container';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// Redux Store
import {
  store,
  persistor
} from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/Tic-Tac-Toe-v2">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);