import React from 'react';
import Avatar from '../Avatar/Avatar';

export function HeaderCenterItems(props) {
    const {
        title, desc, type, anotation,
    } = props;
    let el = '';
    switch (type) {
    case 'caption':
        el = (
            <div className="Header__content">
                <div className="Header__content__item">
                    <h2 >{title}</h2>
                </div>
            </div>
        );
        break;
    case 'chat':
        el = (
            <React.Fragment>
                <Avatar caption={title} modifier="s" />
                <div className="Header__content__item">
                    <h2 >{title}</h2>
                    <p>{desc}</p>
                </div>
            </React.Fragment>
        );
        break;
    case 'input':
        el = (
            <input
                type="text"
                className="Header__content__TextField"
                placeholder={anotation}
                id="Room-name"
            />);
        break;
    default:
    }
    return (
        <div className="Header__content">
            {el}
        </div>
    );
}

