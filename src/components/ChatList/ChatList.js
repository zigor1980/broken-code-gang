import * as React from 'react';
import { InstanceSummaryElement } from '../InstanceSummaryElement/InstanceSummaryElement';
import './ChatList.css';
import { InfiniteRooms } from '../InfiniteRooms/InfiniteRooms';

function ChatList({ rooms, fetchNext }) {
    return (
        <InfiniteRooms fetchNext={fetchNext}>
            {rooms.map(room => (
                <InstanceSummaryElement
                    key={room._id}
                    summary={{
                        avatar: {
                            src: 'https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200',
                            modifier: 'avatar-s',
                        },
                        title: `${room.name}`,
                    }}
                />))}
        </InfiniteRooms>
    );
}

export default ChatList;
