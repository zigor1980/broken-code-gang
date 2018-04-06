import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
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
