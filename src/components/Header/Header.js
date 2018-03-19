import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import { HeaderCenterItems } from './HeaderCenterItems.js';

export function  Header(props) {
    return (
        <header className={'Header'}>
            <button>{props.buttonExit && 'Назад' }</button>
            <HeaderCenterItems groupName='Telegram' participants='0 участников' /> 
            <button>{props.buttonHeaderRight && 'Свойства/поиск' }</button>
        </header>
    );
}
