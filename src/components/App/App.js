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
import { UserList } from '../UserList/UserList';
import { ConnectedAddUserToChatPage } from '../AddUserToChatPage/AddUserToChatPage';
import { routeNavigation } from '../../actions/route';
import api from '../../api';

// TODO: create page for the settings

const routeConfig = {
    authorization: {
        view: AuthorizationPage,
    },
    chat_list: {
        view: ChatListPage,
    },
    contacts_list: {
        view: ConnectedContactsListPage,
    },
    add_room_page: {
        view: AddRoomPage,
    },
    chat_page: {
        view: ConnectedChatPage,
    },
    user_list: {
        view: UserList,
    },
    settings: {
        view: ConnectedUserPage,
    },
    chat_settings: {
        view: GroupChatSettings,
    },
    add_new_user_to_chat_page: {
        view: ConnectedAddUserToChatPage,
    },
};

const stateToProps = state => ({
    route: state.route,
});

class App extends Component {
    componentDidMount() {
        api.getCurrentUser()
            .catch(() => {
            })
            .then((user) => {
                if (user) {
                    this.props.dispatch({
                        type: 'USER_GET_INFO',
                        curUserInfo: user,
                    });
                    this.props.dispatch(routeNavigation({
                        page: 'chat_list',
                        payload: {
                            footerNav: {
                                active: 'chat',
                            },
                        },
                    }));
                } else {
                    this.props.dispatch(routeNavigation({
                        page: 'authorization',
                        payload: {
                        },
                    }));
                }
            });
    }

    render() {
        const Page = routeConfig[this.props.route.page] && routeConfig[this.props.route.page].view;

        if (!Page) {
            return (
                <div className="spinner">
                    <div className="rect1" />
                    <div className="rect2" />
                    <div className="rect3" />
                    <div className="rect4" />
                    <div className="rect5" />
                </div>
            );
        }
        return (
            <Page />
        );
    }
}

export default connect(stateToProps)(App);
