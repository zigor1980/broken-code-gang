import React from 'react';
import {connect} from 'react-redux';
import {InstanceSummaryElement} from '../InstanceSummaryElement/InstanceSummaryElement';

import './ChatList.css';
const stateToProps = (state) => ({
    chats: state.chats,
    // stateChats: state.stateChats
});

export const ChatList = connect(stateToProps) (
         function ChatList(props) {
    /*
    * Get user's latest chats list. Get
    *   - the last message id
    *   - the last message author
    *   - the last message content
    *   - avatar
    *   - chat name
    * for each chat.
    * */

    const chatList = props.chats.map((chat, index) =>
         <InstanceSummaryElement key={chat.id} summary={chat}/>
    );

    return (
        <div className="ChatList">
            {chatList}
        </div>
    )
});
