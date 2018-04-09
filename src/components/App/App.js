import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { AuthorizationPage } from '../AuthorizationPage/AuthorizationPage';
import { ChatListPage } from '../ChatListPage/ChatListPage';
import { AddRoomPage } from  '../AddRoomPage/AddRoomPage';
import { ConnectedChatPage } from '../ChatPage/ChatPage';
import { UserPage } from "../UserPage/UserPage";


//TODO: create page for the settings 

const routeConfig = {
    authorization: {
        view: AuthorizationPage,
    },
    'chat_list': {
        view: ChatListPage
    },
    add_room_page: {
        view: AddRoomPage,
    },
    chat_page: {
        view: ConnectedChatPage,
    },
    'user': {
        view: UserPage
    },
    'settings': {
        view: UserPage
    }
};

const stateToProps = state => ({
    route: state.route,
});

class App extends Component {
    render() {
        let Page = routeConfig[this.props.route.page] && routeConfig[this.props.route.page].view;

        if (!Page) {
            return <div>404 Page Not Found</div>;
        }
        return (
            <Page />
        );
    }
}

export default connect(stateToProps)(App);
