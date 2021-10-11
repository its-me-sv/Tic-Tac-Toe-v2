import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.css';

// Components
import App from './containers/app/app.container';
import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';

// Redux Store
import {
  store,
  // persistor
} from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);