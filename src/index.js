import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Provider permet de rendre le store disponible a toute mon app
root.render(
    <Provider store={store} >
      <App />
    </Provider>
);