import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import {createStore} from "redux"
import {reducer} from "./reducer/reducer"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import {applyMiddleware} from "redux"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppMenu from "./Components/AppMenu"
import 'antd/dist/antd.css';
import MainPage from "./Components/Routes/MainPage"

let store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={AppMenu}/>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/user/:login" component={App}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("appContainer")
);
