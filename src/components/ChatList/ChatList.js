import * as React from 'react';
import { InstanceSummaryElement } from '../InstanceSummaryElement/InstanceSummaryElement';
import './ChatList.css';
import { InfiniteRooms } from '../InfiniteRooms/InfiniteRooms';
import { connect } from 'react-redux';
import { routeNavigation } from '../../actions/route';
import MemberCount from '../../helpers/MemberCount';

const stateToProps = state => ({
    payload: state.route.payload,
});

export const ChatList = connect(stateToProps)(class ChatList extends React.Component {
    enterRoom(roomId) {
        this.props.dispatch(routeNavigation({
            page: 'chat_page',
            payload: {
                ...this.props.payload,
                currentRoom: roomId,
            },
        }));
    }
    render() {
        const { rooms, fetchNext, next } = this.props;
        return (
            <InfiniteRooms fetchNext={fetchNext} next={next}>
                {rooms.map(room => (
                    <InstanceSummaryElement
                        key={room._id}
                        summary={{
                            avatar: {
                                src: 'https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200',
                                modifier: 'avatar-s',
                            },
                            title: `${room.name}`,
                            author: `${room.users.length} ${MemberCount(room.users.length)}`,
                            id: `${room._id}`,
                        }}
                        onclick={this.enterRoom.bind(this)}
                    />))}
            </InfiniteRooms>
        );
    }
});

