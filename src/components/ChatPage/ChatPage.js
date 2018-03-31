import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { ChatField } from '../ChatField/ChatField';
import './ChatPage.css';

export class ChatPage extends React.Component {
    constructor(props) {
        super(props);
        /*
         * Загрузка с помощью api всех сообщений комнаты */
        // let messages = getRoomMessages(roomId);
        const messages = props.roomId;
        this.state = {
            messages,
            userId: props.userId,
        };
    }

    render() {
        const messages = this.state.messages,
            userId = this.state.userId;

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
}
