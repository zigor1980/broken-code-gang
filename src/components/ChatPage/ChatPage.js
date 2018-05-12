import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedHeader } from '../Header/Header';
import { ConnectedFooter } from '../Footer/Footer';
import { ChatField } from '../ChatField/ChatField';
import './ChatPage.css';
import fetchMessages from '../../actions/fetchMessages';
import { InfiniteScroll } from '../InfiniteScroll/InfiniteScroll';
import api from '../../api';
import MemberCount from '../../helpers/MemberCount';
import { routeNavigation } from '../../actions/route';
import replaceUserName from '../../helpers/replaceUserName';

const stateToProps = state => ({
    messages: state.messages,
    payload: state.route.payload,
    userId: state.user.curUserInfo._id,
    curUserInfo: state.user.curUserInfo,
});


export class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.fetchNext = this.props.dispatch.bind(this, fetchMessages(this.props.payload.currentRoom));
        this.lastMessage = null;
        this.props.dispatch({
            type: 'MESSAGES_RELOAD',
        });
        this.getChatInfo = this.getChatInfo.bind(this);
        this.openChatSettings = this.openChatSettings.bind(this);
    }

    componentWillMount() {
        this.getChatInfo(this.props.payload.currentRoom);
    }

    componentDidUpdate() {
        if (this.props.messages.items[this.props.messages.items.length - 1] !== this.lastMessage) {
            this.lastMessage = this.props.messages.items[this.props.messages.items.length - 1];
            document.documentElement.scrollTop = document.documentElement.scrollHeight;
        }
    }

    async getChatInfo(chatId) {
        const chatInfo = await api.getRoom(chatId);
        this.setState({
            chatInfo,
        });
    }

    async openChatSettings() {
        const room = await api.getRoom(this.props.payload.currentRoom);
        const users = await api.getUsersOfRoom(room._id);

        this.props.dispatch(routeNavigation({
            page: 'chat_settings',
            payload: {
                ...this.props.payload,
                prevPrevPage: 'chat_list',
                prevPage: 'chat_page',
                chatUsers: users.items,
            },
        }));
    }

    render() {
        const messages = this.props.messages.items,
            { next } = this.props.messages,
            { userId } = this.props,
            { usersName } = this.props.payload;
        let chatPageContent = '';
        let contentTitle = '';
        let contentDesc = '';
        let isAvatar = '';
        const { chatInfo } = this.state;
        if (chatInfo) {
            isAvatar = (chatInfo.users.length > 2) ? 'true' : '';
            contentTitle = replaceUserName(this.props.curUserInfo.name, chatInfo.name);
            if (chatInfo.users.length === 1) {
                contentDesc = '';
            } else {
                contentDesc = `${chatInfo.users.length} ${MemberCount(chatInfo.users.length)}`;
            }
        }
        if (messages && messages.length) {
            chatPageContent = messages.map(message => (
                <div key={message._id}>
                    <ChatField
                        avatar={isAvatar}
                        message={message}
                        userId={userId}
                        name={usersName[message.userId]}
                    />
                </div>));
        } else {
            chatPageContent = <div className="ChatPage__empty"><p>No messages here yet...</p></div>;
        }

        return (
            <div className="ChatPage">
                <div className="ChatPage__Header">
                    <ConnectedHeader
                        contentTitle={contentTitle}
                        openChatSettings={this.openChatSettings}
                        contentDesc={contentDesc}
                        buttonBack
                        buttonSearch={false}
                        buttonSettings
                        contentType="chat"
                    />
                </div>

                <InfiniteScroll fetchNext={this.fetchNext} scrollDirection="up" next={next}>
                    <div className="ChatPage__MessageField">
                        {chatPageContent}
                    </div>
                </InfiniteScroll>
                <div className="ChatPage__Footer">
                    <ConnectedFooter submitIcon="send" />
                </div>
            </div>
        );
    }
}

export const ConnectedChatPage = connect(stateToProps)(ChatPage);
