/**
 * Created by Denis on 02.12.2017.
 */
import React from "react"
import {TabControl,Tab} from './TabControl'
import IconLabel from "./IconLabel"
import UserFrame from "./UserFrame";

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillMount(){
        let request = new XMLHttpRequest();
        let that = this;
        request.open('GET', "./app/resource/dnal.json", true);
        request.send(null);
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                let type = request.getResponseHeader('Content-Type');
                if (type.indexOf("text") !== 1) {
                    that.setState({data : JSON.parse(request.responseText)});
                }
            }
        }
    }

    render(){
        let data = this.state.data;
        if(data === undefined)
            return "...Loading";
        else
            return(
            <div>
                <div id="userContainer">
                    <div id="userInfo">
                        <UserFrame image={data.image} name={data.name} alias={data.alias} desc={data.desc}
                                   facebook={data.facebook} address={data.address} mail={data.mail} twitter={data.twitter}/>
                    </div>
                </div>
                <div id="tabContainer">
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
                    </TabControl>
                </div>
            </div>
            )
    }
}