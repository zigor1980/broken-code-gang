import React from 'react';

export function SettingsBtn (props) {
    const btnSrc = require('../../../assets/icons/settings-active.png');
    return (
        <img className={props.className} src={btnSrc} alt="Settings"/>
    );
}
