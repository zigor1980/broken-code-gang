import React from 'react';
import {ChatBtn} from "../Buttons/ChatBtn/ChatBtn";
import {UserBtn} from "../Buttons/UserBtn/UserBtn";
import {SettingsBtn} from "../Buttons/SettingsBtn/SettingsBtn";
import "./FooterNav.css";

export function FooterNav (props) {
    return (
        <footer className='Footer Footer__nav'>
            <ChatBtn className="Footer__nav_btn" status={props.active === 'chat'}/>
            <UserBtn className="Footer__nav_btn" status={props.active === 'user'}/>
            <SettingsBtn className="Footer__nav_btn" status={props.active === 'settings'}/>
        </footer>
    );
}
