import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './redux/reducers.js'

let store = createStore(todoApp)

//这里是出口文件 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();



