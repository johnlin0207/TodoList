import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import combineRe from './reducer'
import './index';
import './App';
import WebRouter from './router'
import registerServiceWorker from './registerServiceWorker';

// 创建store并绑定reducer
let store = createStore(combineRe);

if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    store = createStore(combineRe, applyMiddleware(logger))
}

ReactDOM.render(
    <Provider store={store}>
        <WebRouter/>
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
