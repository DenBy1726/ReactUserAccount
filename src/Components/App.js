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
import {Spin} from "antd"
import 'antd/dist/antd.css';

class App extends React.Component{

    constructor(props){
        super(props);
        this.url;
    }

    componentWillMount() {
        this.url = this.props.match.params.login;
        this.props.upload(this.url);
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.match.params.login != this.url){
            this.url = nextProps.match.params.login;
            this.props.upload(this.url);
            return false;
        }
        return true;
    }

    render(){
        let data = this.props.data;
                return (
                    <div id="dataContainer">
                            <div id="userContainer">
                                <Spin tip="Loading..." spinning={this.props.stage.loading}>
                                    <div id="userInfo">
                                        <UserFrame image={data.avatar_url} name={data.name} alias={data.login} desc={data.bio}
                                                   address={data.location} mail={data.email}
                                                   blog={data.blog} company={data.company} created={data.created_at}/>
                                    </div>
                                </Spin>
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