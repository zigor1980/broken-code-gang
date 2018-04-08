import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { AuthorizationPage } from '../AuthorizationPage/AuthorizationPage';
import { ChatListPage } from '../ChatListPage/ChatListPage';
import { AddRoomPage } from  '../AddRoomPage/AddRoomPage';
import { ConnectedChatPage } from '../ChatPage/ChatPage';


const routeConfig = {
    authorization: {
        view: AuthorizationPage,
    },
    chat_list: {
        view: ChatListPage,
    },
    AddRoomPage: {
        view: AddRoomPage,
    },
    chat_page: {
        view: ConnectedChatPage,
    },
};

const stateToProps = state => ({
    route: state.route,
});

class App extends Component {
    render() {
        let Page = routeConfig[this.props.route.page] && routeConfig[this.props.route.page].view;

        if (!Page) {
            Page = <div>404 Page Not Found</div>;
        }
        return (
            <Page />
        );
    }
}

export default connect(stateToProps)(App);
