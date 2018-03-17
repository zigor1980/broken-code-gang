import React from 'react';
import ReactDOM from 'react-dom';

import HeaderCenterItem from './HeaderCenterItems.js';


export default class Header extends  React.Component {
    render() {
        return (
            <header className={'Header'}  >
            <button>{this.props.buttonExit && 'Назад' }</button>
             <HeaderCenterItem groupName={'Telegram'} participants={'0 участников'} /> 
                <button>{this.props.buttonHeaderRight && 'Свойства/поиск' }</button>
            </header>
        );
    }
}


