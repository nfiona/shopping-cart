import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// The Provider will wrap our App component along with a store that encapsulates local states within the App component.
import App from './components/App';
import Store from './Store'
import './stylesheets/index.css';


const StoreInstance = Store()


ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
