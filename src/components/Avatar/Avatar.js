import React from 'react';
import './Avatar.css';
import shortenName from '../../helpers/shortenName';

export default function Avatar(props) {
    const { caption, modifier } = props;
    const shortName = shortenName(caption);
    return (
        <div className={`avatar avatar_${modifier}`}>
            <span>{shortName}</span>
        </div>
    );
}
