import React, { Component } from 'react';
import { ConnectedHeader } from '../Header/Header';
import { ConnectedFooter } from '../Footer/Footer';
import { ChatField } from '../ChatField/ChatField';
import { connect } from 'react-redux';
import './ChatPage.css';
import fetchMessages from '../../actions/fetchMessages';
import { InfiniteScroll } from '../InfiniteScroll/InfiniteScroll';
import api from '../../api';
import { addMessage } from '../../actions/messages';
import MemberCount from '../../helpers/MemberCount';

const stateToProps = state => ({
    messages: state.messages,
    payload: state.route.payload,
    userId:state.user._id,
});


export class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.fetchNext = this.props.dispatch.bind(this, fetchMessages(this.props.payload.currentRoom));
        this.lastMessage = null;
        this.props.dispatch({
            type:'MESSAGES_RELOAD',
        })
    }

    componentWillMount = () => {
        let chatInfo = this.getChatInfo(this.props.payload.currentRoom);
    };

    getChatInfo = async (chatId) => {
        let chatInfo = await api.getRoom(chatId);
        this.setState({
            chatInfo: chatInfo
        });
    };

    componentDidMount() {
        api.onMessage((message) => {
            this.props.dispatch(addMessage(message));
        });
    }

    componentDidUpdate() {
        if (this.props.messages.items[this.props.messages.items.length - 1] !== this.lastMessage) {
            this.lastMessage = this.props.messages.items[this.props.messages.items.length - 1];
            document.documentElement.scrollTop = document.documentElement.scrollHeight;
        }
    }
    
    componentWillUnmount(){
        api.currentUserLeaveRoom(this.props.payload.currentRoom);
    }

    render() {
        const messages = this.props.messages.items,
            next = this.props.messages.next,
            userId = this.props.userId;

        let chatPageContent = '';
        if (messages && messages.length) {
            chatPageContent = messages.map(message => (
                <div key={message._id}>
                    <ChatField message={message} userId={userId} />
                </div>));
        } else {
            chatPageContent = <div className="ChatPage__empty"><p>No messages here yet...</p></div>;
        }

        let contentTitle = '';
        let contentDesc = '';
        let chatInfo = this.state.chatInfo;
        if (chatInfo) {
            contentTitle = chatInfo.name;
            if (chatInfo.users.length === 1){
                contentDesc = '';
            } else {
                contentDesc = `${chatInfo.users.length} ${MemberCount(chatInfo.users.length)}`
            }
        }

        return (
            <div className="ChatPage">
                <div className="ChatPage__Header">
                    <ConnectedHeader buttonBack buttonSearch={false} buttonSettings={false} contentType="chat" />
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
