import React from 'react';
import Icon from './Icon.js'
import ExLabel from './Label.js'

class IconLabel extends React.Component{
    render(){
        return  <div>
            <Icon icon={this.props.icon}/>
            <ExLabel href={this.props.href} text={this.props.text}/>
        </div>
    }
}

export default IconLabel;