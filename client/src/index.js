import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {Provider} from "react-redux"
import {createStore, applyMiddleware, compose} from "redux"
import thunk from 'redux-thunk'

import reducers from './reducers'
import './index.css'
const store = createStore(reducers,compose(applyMiddleware(thunk)))
ReactDOM.render(
    // provides the global state to the entier application
    <Provider store = {store}>
        <App/>
    </Provider>
    , document.getElementById("root")
    )