import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Components/Icon.js'
import IconLabel from './Components/IconLabel.js';
import UserFrame from './Components/UserFrame.js';
import JUserFrame from './Components/JUserFrame.js';
import {TabControl,Tab} from "./Components/TabControl.js";


function getText(file){
    // read text from URL location
    let request = new XMLHttpRequest();
    request.open('GET', file, true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                let json = request.responseText;
                console.log(json);
                ReactDOM.render(
                    <JUserFrame json={json}/>,
                    document.getElementById("userInfo")
                );
            }
        }
    }
}
getText( "./app/resource/dnal.json");



ReactDOM.render(
    <TabControl >
        <Tab text="Основные">
            <div className="editDivTab"><IconLabel  icon="edit fa-2x" /></div>
            <div className="TabContent">
                <h3>Холост</h3>
            </div>
        </Tab>
        <Tab text="Образование">
            <div className="editDivTab"><IconLabel  icon="edit fa-2x" /></div>
            <div className="TabContent">
                <h3>Незаконченное высшее</h3>
            </div>
        </Tab>
        <Tab text="Контакты">
            <div className="editDivTab"><IconLabel  icon="edit fa-2x" /></div>
            <div className="TabContent">
                <h3>В анкете</h3>
            </div>
        </Tab>
    </TabControl>,
    document.getElementById("tabContainer")
);