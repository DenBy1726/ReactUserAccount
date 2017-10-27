import React from 'react';

class Icon extends React.Component{
    constructor(){
        super();
    }
    render(){
        let classname = "fa "+"fa-" + this.props.icon;
        return <i className={classname}/>
    }
}

export default Icon;