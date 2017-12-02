import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import {createStore} from "redux"
import {reducer} from "./reducer/reducer"
import {Provider} from "react-redux"

let store = createStore(reducer);

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById("appContainer")
);
