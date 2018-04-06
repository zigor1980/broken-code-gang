import * as React from 'react';
import { connect } from 'react-redux';
import { InstanceSummaryElement } from '../InstanceSummaryElement/InstanceSummaryElement';
import './ChatList.css';
import fetchRooms from '../../actions/fetchRooms';
import addRoom from '../../actions/rooms';

const stateToProps = state => ({
    rooms: state.rooms,
});

export const ChatList = connect(stateToProps)(
    class ChatList extends React.Component {
        constructor(props) {
            super(props);
            this.fetch = this.fetch.bind(this);
            this.addRoom = this.addRoom.bind(this);
        }
        componentDidMount() {
            this.fetch()
                .then(() => {
                })
                .catch(() => {
                });
        }
        fetch() {
            return this.props.dispatch(fetchRooms());
        }
        addRoom() {
            return this.props.dispatch(addRoom(null));
        }
        render() {
            const { rooms } = this.props;
            let chatlist;
            chatlist = rooms.items.map(el =>
                <InstanceSummaryElement
                    key={el._id}
                    summary={{
                        avatar: {
                            src: 'https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200',
                            modifier: 'avatar-s',
                        },
                        title: `${el.name}`,
                    }}
                />);
            return (
                <div className="ChatList">
                    { chatlist }
                    <button onClick={this.addRoom}>Добавить чат</button>
                </div>
            );
        }
    });
