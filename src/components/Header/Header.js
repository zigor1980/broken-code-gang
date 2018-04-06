import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import { HeaderCenterItems } from '../HeaderCenterItems/HeaderCenterItems';
import { addChat, resetChats } from '../../actions/chatAction';
import { Button } from '../Button/Button';


const stateToProps = (state) => {
    console.log(state);
    return {
        chats: state.chats,
    // stateChats: state.stateChats
    };
};

export default class Header extends Component {
    render() {
        const {
            buttonBack, buttonSearch, buttonSettings, contentType,
        } = this.props;
        const leftControl = buttonBack ? <Button type="back" active modifier="s" circle /> : '';
        let rightControl = '';
        if (buttonSearch) {
            rightControl = <Button type="search" active modifier="s" circle />;
        } else if (buttonSettings) {
            rightControl = <Button type="settings" active modifier="s" circle />;
        }
        let contentTitle = '';
        let contentDesc = '';
        switch (contentType) {
        case 'chats':
            contentTitle = 'BCG';
            break;
        case 'contacts':
            contentTitle = 'Contacts';
            break;
        case 'add-user':
            contentTitle = 'Select contact';
            break;
        case 'profile':
            contentTitle = 'User name';
            break;
        case 'chat':
            contentTitle = 'SHRI/ Anon';
            contentDesc = '9 members / last seen at';
            break;
        default:
            contentTitle = 'BCG';
            break;
        }

        return (
            <header className="Header">
                {leftControl}
                <HeaderCenterItems title={contentTitle} desc={contentDesc} />
                {rightControl}
            </header>
        );
    }
}

export const ConnectedHeader = connect(stateToProps)(Header);
