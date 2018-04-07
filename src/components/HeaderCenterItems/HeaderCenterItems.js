import React from 'react';

export function HeaderCenterItems(props) {
    const title = props.title ? props.title : '';
    const desc = props.desc ? props.desc : '';
    return (
        <div className="Header__content">
            <div>
                <img
                    src=""
                    alt=""
                />
            </div>
            <div className="Header__content__item">
                <h2 >{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
}

