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

    componentWillMount() {
        let that = this;
        fetch('https://api.github.com/users/octocat').then(response => {
            response.json().then(data => {
                console.log(data);
                that.setState({data});
            });
        })
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
                        <UserFrame image={data.avatar_url} name={data.name} alias={data.login} desc={data.bio}
                                   facebook={data.facebook} address={data.location} mail={data.email} twitter={data.twitter}/>
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