import React, { Component } from 'react';
import { Avatar } from '../Avatar/Avatar';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header.js';
import { ChatPage } from '../ChatPage/ChatPage';
import { connect } from 'react-redux';
import { ConnectedChatPage } from '../ChatPage/ChatPage';
import { AuthorizationPage } from '../AuthorizationPage/AuthorizationPage';
import { ChatListPage } from '../ChatListPage/ChatListPage';


const routeConfig = {
    authorization: {
        view: AuthorizationPage,
    },
    chat_list: {
        view: ChatListPage,
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
