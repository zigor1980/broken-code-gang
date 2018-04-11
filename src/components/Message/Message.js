import React from 'react';

import './Message.css';

export default function Message(props) {
    return (
        <div className='Message'>
            {props.text}
        </div>
    );
}
