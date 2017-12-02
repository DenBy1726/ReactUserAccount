/**
 * Created by Denis on 02.12.2017.
 */
import React from "react"
import {TabControl,Tab} from './TabControl'
import IconLabel from "./IconLabel"
import UserFrame from "./UserFrame";
import {connect} from "react-redux"
import * as actions from "../actions/action"
import propTypes from "prop-types"

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.upload('DenBy1726');
    }

    render(){
        let data = this.props.data;
        switch(this.props.stage.title) {
            case "LOADING":
                return `...Loading data for ${this.props.stage.name}`;
            case "ERROR":
                console.log(this.props.stage.error);
                return `Cannot upload ${this.props.stage.name}.
                        Please check browser log to see details.`;
            case "SUCCESS":
                return (
                    <div>
                        <div id="userContainer">
                            <div id="userInfo">
                                <UserFrame image={data.avatar_url} name={data.name} alias={data.login} desc={data.bio}
                                           facebook={data.facebook} address={data.location} mail={data.email}
                                           twitter={data.twitter}/>
                            </div>
                        </div>
                        <div id="tabContainer">
                            <TabControl >
                                <Tab text="Основные">
                                    <div className="editDivTab"><IconLabel icon="edit fa-2x"/></div>
                                    <div className="TabContent">
                                        <h3>Холост</h3>
                                    </div>
                                </Tab>
                                <Tab text="Образование">
                                    <div className="editDivTab"><IconLabel icon="edit fa-2x"/></div>
                                    <div className="TabContent">
                                        <h3>Незаконченное высшее</h3>
                                    </div>
                                </Tab>
                                <Tab text="Контакты">
                                    <div className="editDivTab"><IconLabel icon="edit fa-2x"/></div>
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
}

App.propTypes = {
    data: propTypes.object.isRequired,
    stage: propTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        data: state.data,
        stage: state.stage
    };
}

export default connect(mapStateToProps,actions)(App)