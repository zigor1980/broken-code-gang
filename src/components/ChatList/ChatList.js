import React from 'react';
import {connect} from 'react-redux';
import {InstanceSummaryElement} from '../InstanceSummaryElement/InstanceSummaryElement';

import './ChatList.css';
const stateToProps = (state) => ({
    rooms: state.rooms,
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
console.log(props.rooms);
    const chatList = props.rooms.map((room, index) => {
        let item = {
            avatar: {
                src: 'https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200',
                modifier: 'avatar-s',
            },
            title: room.name,
            description: room.name,
            author: 'Bibushik',
            id: room._id,
        };

         return (
             <InstanceSummaryElement key={room._id} summary={item} onclick = {()=> {
                console.log('asdddddd');
             }}


             />
         );
    });

    return (
        <div className="ChatList">
            {chatList}
        </div>
    )
});
