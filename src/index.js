import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import combineRe from './reducer'
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// 创建store并绑定reducer
const store = createStore(combineRe);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
