import React from 'react';

export function HeaderCenterItems(props) {
    const title = props.title ? props.title : '';
    const desc = props.desc ? props.desc : '';
    return (
        <div className="Header__content">
            <img src="http://localhost:3000/static/media/logo.5d5d9eef.svg" style={{ width: '85px' }} />
            <div className="Header__content__item">
                <h2 >{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
}

