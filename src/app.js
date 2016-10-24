import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createAppStore from './redux/store';
import App from './containers/App';

(() => {
  const store = createAppStore();
  ReactDOM.render(
    (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    global.document.getElementById('app')
  );
})();
