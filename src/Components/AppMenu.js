/**
 * Created by Denis on 02.12.2017.
 */
import { Menu, Icon, Input } from 'antd';
import React from "react"
import {Link,NavLink,Redirect} from 'react-router-dom'
import IconLabel from "./IconLabel";

export default class AppMenu extends React.Component{
    render(){
        return (
             <Menu
                mode="horizontal"
             >
                 <Menu.Item key="main">
                     Главная страница
                    <NavLink to="/"/>
                 </Menu.Item>
                 <Menu.Item key="about">
                     Справка
                    <NavLink to="/About"/>
                 </Menu.Item>
                 <Menu.Item key="input">
                     <Input.Search
                         placeholder="input search text"
                         onSearch={value => this.props.history.push("/user/" + value)}
                     />
                 </Menu.Item>
                 <Menu.SubMenu title="Ссылки" key="links">
                     <Menu.Item key="user/DenBy1726">
                         Создатель
                         <NavLink to="/user/DenBy1726"/>
                     </Menu.Item>
                     <Menu.Item key="user/gaearon">
                         Создатель Redux
                         <NavLink to="/user/gaearon"/>
                     </Menu.Item>
                 </Menu.SubMenu>
             </Menu>
        )
    }
}