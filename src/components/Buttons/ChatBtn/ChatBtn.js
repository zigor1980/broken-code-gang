import React from 'react';

export function ChatBtn (props) {
    let btnStatus = '';
    (props.status) ? btnStatus = 'active' : btnStatus = 'inactive';
    const btnSrc = require(`../../../assets/icons/chat-${btnStatus}.png`);
    return (
        <img className={props.className} src={btnSrc} alt="Chats list"/>
    );
}
