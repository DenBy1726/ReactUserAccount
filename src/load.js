import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './Components/Icon.js'
import IconLabel from './Components/IconLabel.js';
import UserFrame from './Components/UserFrame.js';
import JUserFrame from './Components/JUserFrame.js';
import {TabControl,Tab} from "./Components/TabControl.js";

/*ReactDOM.render(
    <Icon icon="asterisk"/>,
    document.getElementById("iconCont"),
    console.log("fsdf")
);*/
/*ReactDOM.render(
    <IconLabel icon="asterisk" text="hello" href="127.0.0.0:0000"/>,
    document.getElementById("iconCont"),
    console.log("fsdf")
);*/

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
        <Tab display="Основные">
            <div className="editDivTab"><IconLabel  icon="edit fa-2x" /></div>
            <div className="TabContent"/>
        </Tab>
        <Tab display="Образование">
            <div className="editDivTab"><IconLabel  icon="edit fa-2x" /></div>
            <div className="TabContent"/>
        </Tab>
        <Tab display="Контакты">
            <div className="editDivTab"><IconLabel  icon="edit fa-2x" /></div>
            <div className="TabContent"/>
        </Tab>
    </TabControl>,
    document.getElementById("tabContainer")
);