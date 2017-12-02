import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import {createStore} from "redux"
import {reducer} from "./reducer/reducer"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import {applyMiddleware} from "redux"

let store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById("appContainer")
);
