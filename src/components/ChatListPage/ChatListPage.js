import * as React from 'react';
import { connect } from 'react-redux';
import {fetchChats} from '../../actions/fetchChats';

import './ChatListPage.css';

import Header from '../Header/Header';
import { ChatList } from '../ChatList/ChatList';
import { FooterNav } from '../FooterNav/FooterNav';

const stateToProps = state => ({
});

export const ChatListPage = connect(stateToProps)(
    class ChatListPage  extends React.Component {

        render() {
            return (
              <div className="ChatListPage">
                <Header buttonExit="true" buttonHeaderRight="true" />
                <ChatList />
                <FooterNav active="chat" />
            </div>
        );
    }
});
export default connect()(ChatListPage);
