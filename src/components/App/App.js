import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { AuthorizationPage } from '../AuthorizationPage/AuthorizationPage';
import { ChatListPage } from '../ChatListPage/ChatListPage';
import { AddRoomPage } from '../AddRoomPage/AddRoomPage';
import { ConnectedChatPage } from '../ChatPage/ChatPage';
import { ConnectedUserPage } from '../UserPage/UserPage';
import { ConnectedContactsListPage } from '../ContactsListPage/ContactsListPage';
import { GroupChatSettings } from '../GroupChatSettings/GroupChatSettings';
import { ConnectedUserList } from '../UserList/UserList';


// TODO: create page for the settings

const routeConfig = {
    authorization: {
        view: AuthorizationPage,
    },
    'chat_list': {
        view: ChatListPage
    },
    'contacts_list': {
        view: ConnectedContactsListPage
    },
    add_room_page: {
        view: AddRoomPage,
    },
    chat_page: {
        view: ConnectedChatPage,
    },
    'user_list':{
        view: ConnectedUserList,
    },
    'settings': {
        view: ConnectedUserPage,
    },
    'chat_settings': {
        view: GroupChatSettings,
    },
};

const stateToProps = state => ({
    route: state.route,
});

class App extends Component {
    render() {
        const Page = routeConfig[this.props.route.page] && routeConfig[this.props.route.page].view;

        if (!Page) {
            return <div>404 Page Not Found</div>;
        }
        return (
            <Page />
        );
    }
}

export default connect(stateToProps)(App);
