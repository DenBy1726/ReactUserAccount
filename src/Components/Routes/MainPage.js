/**
 * Created by Denis on 02.12.2017.
 */
import React from "react"
import { Steps } from 'antd';

export default class MainPage extends React.Component{
    render() {
        return (
            <div>
                <div>
                     <h1>Приложение клиент для отрисовки информации о пользователях GitHub</h1>
                </div>
                <div>
                    <h3>Как использовать?</h3>
                </div>
                <div>
                    <Steps direction="vertical" current={2}>
                        <Steps.Step title="Поиск" description="Введите никнейм пользователя в поле ввода в меню" />
                        <Steps.Step title="Ссылки" description="Пункт меню ссылки содержит ссылки на страницы" />
                        <Steps.Step title="URL" description="Вы можете использовать шаблон user/{логин пользователя} для поиска из окна браузера" />
                    </Steps>
                </div>
            </div>
        )
    }
}