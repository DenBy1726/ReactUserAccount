import React from "react"
import classNames from 'classnames';

//панель вкладок
class TabControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {activeIndex: this.props.activeIndex || 0};
        this.onClick = this.onClick.bind(this);
    }

    onClick(index) {
        this.setState({
            activeIndex : index
        });
    }

    render() {
        let self = this;

        //получаем список табов
        let tabNodes = self.props.children.map(function (child, index) {
            let className = classNames({'active': self.state.activeIndex === index});
            return (
                <li onClick={self.onClick.bind(this, index)}>
                    <a className={className} href="#">{child.props.text}</a>
                </li>
            );
        });

        //получаем активную вкладку
        let contentNodes = self.props.children.map(function (child, index) {
            if (self.state.activeIndex === index) {
                return (
                    <div className="TabPane">
                        {child.props.children}
                    </div>
                );
            }
        });

        return (
            <div className="TabbedArea">
                <ul className="Tab clearfix">
                    {tabNodes}
                </ul>
                <section>
                    {contentNodes}
                </section>
            </div>
        );
    }

}

//вкладка
class Tab extends React.Component{
    render() {
        let active = this.props.active || false;
        if (active) {
            return this.props.children;
        } else {
            return null;
        }
    }
}

export{TabControl,Tab};