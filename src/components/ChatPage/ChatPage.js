import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { ChatField } from '../ChatField/ChatField';
import { connect } from 'react-redux';
import './ChatPage.css';

const stateToProps = state => ({
    messages: state.messages,
});


export const ChatPage = connect(stateToProps)(class ChatPage extends Component {
    render() {
        const messages = this.props.messages,
            userId = 'bibushik';

        return (
          <div className="ChatPage">
              <div className="ChatPage__Header">
                  <Header buttonExit="true" buttonHeaderRight="true" />
                </div>
              <div className="ChatPage__MessageField">
              {messages.map(message => (
                      <div key={message.id}>
                          <ChatField message={message} userId={userId} />
                        </div>))}
                </div>
              <div className="ChatPage__Footer">
                  <Footer submitIcon="send" />
                </div>
            </div>
        );
    }
});
