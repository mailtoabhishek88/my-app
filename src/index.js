import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ageReducer from './reducer/ageReducer';
import balanceReducer from './reducer/balanceReducer';
import loanReducer from './reducer/loanReducer';
import { BrowserRouter } from 'react-router-dom';

// const store = createStore(ageReducer);

// Using combineReducers for combining multiple Reducers
const store = createStore(combineReducers({
    ageReducer,
    balanceReducer,
    loanReducer
}));

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
