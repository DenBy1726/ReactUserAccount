import React from 'react'
import ReactDOM from 'react-dom'
import UserFrame from "./UserFrame";

//UserFrame который распаковывается из JSON
class JUserFrame extends React.Component{

    render(){
        const data = JSON.parse(this.props.json);
        return <UserFrame image={data.image} name={data.name} alias={data.alias} desc={data.desc}
                facebook={data.facebook} address={data.address} mail={data.mail} twitter={data.twitter}/>
    }
}

export default JUserFrame;