import * as React from 'react';
import { connect } from 'react-redux';
import { InstanceSummaryElement } from '../InstanceSummaryElement/InstanceSummaryElement';
import './ChatList.css';
import { InfiniteRooms } from '../InfiniteRooms/InfiniteRooms';
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
        users.items.forEach((user) => {
            usersName[user._id] = user.name;
        });
        this.props.dispatch(routeNavigation({
            page: 'chat_page',
            payload: {
                usersName,
                currentRoom: roomId,
                prevPage: 'chat_list',
            },
        }));
    }
    render() {
        const { rooms, fetchNext, next } = this.props;
        rooms.sort((a, b) => {
            if ((!a.lastMessage) || (!b.lastMessage) ||
            (a.lastMessage.created_at === null) || (b.lastMessage.created_at === null)) {
                return 0;
            }
            return a.lastMessage.created_at > b.lastMessage.created_at ? -1 : 1;
        });
        return (
            <InfiniteRooms fetchNext={fetchNext} next={next}>
                {rooms.map((room) => {
                    const roomName = replaceUserName(this.props.curUserInfo.name, room.name),
                        date = new Date();
                    let author = '',
                        description = '',
                        timestamp = '';
                    if (room && room.lastMessage) {
                        author = room.lastMessage.name;
                        date.setTime(room.lastMessage.created_at);
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
                        handle={this.enterRoom.bind(this, room._id)}
                    />);
                })}
            </InfiniteRooms>
        );
    }
});

