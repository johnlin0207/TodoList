import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import combineRe from './reducer';
import ReduxThunk from 'redux-thunk';
import WebRouter from './router';
import registerServiceWorker from './registerServiceWorker';
import './index';
import './App';

// 创建store并绑定reducer
//let store = createStore(combineRe);
let thunk = ReduxThunk, midware = [thunk];

if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    midware.push(logger)
}
let store = createStore(combineRe, applyMiddleware(...midware));
ReactDOM.render(
    <Provider store={store}>
        <WebRouter/>
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
