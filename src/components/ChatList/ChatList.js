import * as React from 'react';
import { InstanceSummaryElement } from '../InstanceSummaryElement/InstanceSummaryElement';
import './ChatList.css';
import { InfiniteRooms } from '../InfiniteRooms/InfiniteRooms';
import { connect } from 'react-redux';
import { routeNavigation } from '../../actions/route';
import api from '../../api';
import { createDateStamp } from '../../helpers/createDateStamp';
import replaceUserName from '../../helpers/replaceUserName';

const stateToProps = state => ({
    payload: state.route.payload,
    curUserInfo: state.user.curUserInfo,
});

export const ChatList = connect(stateToProps)(class ChatList extends React.Component {
    async enterRoom(roomId) {
        const users = await api.getUsersOfRoom(roomId),
            usersName = {};
        users.items.forEach(user => {
            usersName[user._id]=user.name;
        });
        this.props.dispatch(routeNavigation({
            page: 'chat_page',
            payload: {
                usersName: usersName,
                currentRoom: roomId,
                prevPage: 'chat_list',
            },
        }));
    }
    render() {
        const { rooms, fetchNext, next } = this.props;
        return (
            <InfiniteRooms fetchNext={fetchNext} next={next}>
                {rooms.map((room) => {
                    let roomName = replaceUserName(this.props.curUserInfo.name, room.name),
                        date = new Date(),
                        author='',
                        description='',
                        timestamp='';
                    if (room && room.lastMessage && room.lastMessage.userName) {
                        date.setTime(room.lastMessage.created_at);
                        author = room.lastMessage.userName;
                        description = room.lastMessage.message;
                        timestamp = createDateStamp(date);
                    }

                    return (<InstanceSummaryElement
                        key={room._id}
                        summary={{
                            title: `${roomName}`,
                            timestamp: `${timestamp}`,
                            author: `${author}`,
                            description: `${description}`,
                            id: `${room._id}`,
                        }}
                        onclick={this.enterRoom.bind(this)}
                    />);
                })}
            </InfiniteRooms>
        );
    }
});

