import React from 'react';

export function UserBtn (props) {
    let btnStatus = '';
    (props.status) ? btnStatus = 'active' : btnStatus = 'inactive';
    const btnSrc = require(`../../../assets/icons/user-${btnStatus}.png`);
    return (
        <img className={props.className} src={btnSrc} alt="Contacts list"/>
    );
}
