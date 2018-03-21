import React from 'react';
import './Header.css';
import { HeaderCenterItems } from '../HeaderCenterItems/HeaderCenterItems';

export function  Header(props) {
    return (
        <header className='Header'>
            <button>{props.buttonExit && 'Назад' }</button>
            <HeaderCenterItems groupName='Telegram' participants='0 участников' /> 
            <button>{props.buttonHeaderRight && 'Свойства/поиск' }</button>
        </header>
    );
}
