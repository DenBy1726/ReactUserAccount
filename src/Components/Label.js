import React from 'react';

class ExLabel extends React.Component{
    render(){
            return <a href={this.props.href}>{this.props.text}</a>
    }
}

export default ExLabel;
