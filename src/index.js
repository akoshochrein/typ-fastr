import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App.jsx';
import { createStore } from 'redux';
import { typFastrApp } from './reducers';
import { connect, Provider } from 'react-redux';

let store = createStore(typFastrApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("content")
);
