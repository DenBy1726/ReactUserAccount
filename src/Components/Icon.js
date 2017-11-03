import React from 'react';

//компонент отрисовывает иконку из Awesome fonts
class Icon extends React.Component{
    render(){
        let classname = "fa "+"fa-" + this.props.icon;
        return <i className={classname} onClick={this.props.onclick}/>
    }

}

export default Icon;