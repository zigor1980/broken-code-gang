import React, { Component } from 'react';
import Header from '../Header/Header';
import { ConnectedFooter } from '../Footer/Footer';
import { ChatField } from '../ChatField/ChatField';
import { connect } from 'react-redux';
import './ChatPage.css';
import fetchMessages from '../../actions/fetchMessages';

const stateToProps = state => ({
    messages: state.messages,
    payload: state.route.payload,
});


export class ChatPage extends Component {
    constructor(props) {
        super(props);

        this.props.dispatch(fetchMessages(this.props.payload.currentRoom));
    }

    render() {
        const messages = this.props.messages.messages.items,
            userId = 'bibushik';

        let chatPageContent = '';
        if (messages && messages.length) {
            chatPageContent = messages.map(message => (
                <div key={message._id}>
                    <ChatField message={message} userId={userId} />
                </div>));
        } else {
            chatPageContent = <div className="ChatPage__empty"><p>No messages here yet...</p></div>;
        }

        return (
            <div className="ChatPage">
                <div className="ChatPage__Header">
                    <Header buttonBack buttonSearch={false} buttonSettings contentType="chat" />
                </div>

                <div className="ChatPage__MessageField">
                    {chatPageContent}
                </div>
                <div className="ChatPage__Footer">
                    <ConnectedFooter submitIcon="send" />
                </div>
            </div>
        );
    }
}

export const ConnectedChatPage = connect(stateToProps)(ChatPage);
