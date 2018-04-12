import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as actions from './store/actions/cards';
var store = require('./store/configureStore').configure();
store.dispatch(actions.startGetCards());
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.querySelector('.container'));
