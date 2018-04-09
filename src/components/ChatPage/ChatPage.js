import React, {Component} from 'react';
import Header from '../Header/Header';
import {ConnectedFooter} from '../Footer/Footer';
import {ChatField} from '../ChatField/ChatField';
import {connect} from 'react-redux';
import './ChatPage.css';
import fetchMessages from '../../actions/fetchMessages';
import {InfiniteScroll} from '../InfiniteScroll/InfiniteScroll';
import api from '../../api';
import {addMessage}  from '../../actions/messages';

const stateToProps = state => ({
    messages: state.messages,
    payload: state.route.payload,
});


export class ChatPage extends Component {

    constructor(props) {
        super(props);
        this.fetchNext = this.props.dispatch.bind(this, fetchMessages(this.props.payload.currentRoom));
        this.lastMessage = null;
    }

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

    render() {
        const messages = this.props.messages.items,
            userId = 'bibushik';

        let chatPageContent = '';
        if (messages && messages.length) {
            chatPageContent = messages.map(message => (
                <div key={message._id}>
                    <ChatField message={message} userId={userId}/>
                </div>));
        } else {
            chatPageContent = <div className="ChatPage__empty"><p>No messages here yet...</p></div>;
        }

        return (
            <div className="ChatPage">
                <div className="ChatPage__Header">
                    <Header buttonBack buttonSearch={false} buttonSettings contentType="chat"/>
                </div>

                <InfiniteScroll fetchNext={this.fetchNext} scrollDirection='up'>
                    <div className="ChatPage__MessageField">
                        {chatPageContent}
                    </div>
                </InfiniteScroll>
                <div className="ChatPage__Footer">
                    <ConnectedFooter submitIcon="send"/>
                </div>
            </div>
        );
    }
}

export const ConnectedChatPage = connect(stateToProps)(ChatPage);
