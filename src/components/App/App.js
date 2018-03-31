import React, { Component } from 'react';
import { Avatar } from '../Avatar/Avatar';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header.js';
import { ChatPage } from '../ChatPage/ChatPage';
import { connect } from 'react-redux'

import { AuthorizationPage } from "../AuthorizationPage/AuthorizationPage";
import { ChatListPage } from "../ChatListPage/ChatListPage";


const routeConfig = {
    authorization: {
        view: AuthorizationPage
    },
    'chat_list': {
        view: ChatListPage
    }
};

const stateToProps = (state) => ({
    route: state.route,
});


class App extends Component {
    render() {
        const Page = routeConfig[this.props.route.page].view;

        return (
            <Page />
        );
    }
}

export default connect(stateToProps)(App);
