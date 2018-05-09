import * as React from 'react';
import { connect } from 'react-redux';
import './AddRoomPage.css';
import { ConnectedHeader } from '../Header/Header';
import fetchUsers from '../../actions/fetchUsers';
import { InfiniteRooms } from '../InfiniteRooms/InfiniteRooms';
import addRoom from '../../actions/rooms';
import { routeNavigation } from '../../actions/route';
import { InstanceSummaryElement } from '../InstanceSummaryElement/InstanceSummaryElement';

const stateToProps = state => ({
    items: state.users.items,
    next: state.users.next,
    end: state.users.end,
    newRoom: state.rooms.newRoom,
});

export const AddRoomPage = connect(stateToProps)(class AddRoomPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
        this.fetch = this.fetch.bind(this);
        this.addRoomHandle = this.addRoomHandle.bind(this);
        this.enterRoom = this.enterRoom.bind(this);
        this.mas = [];
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'USERS_RESET',
        });
        this.fetch()
            .then(() => {
                this.setState({ loading: false });
            })
            .catch((error) => {
                this.setState({
                    loading: false,
                    error,
                });
            });
    }

    componentWillReceiveProps(props) {
        if (props.newRoom && (!this.props.newRoom || props.newRoom._id !== this.props.newRoom._id)) {
            this.enterRoom(props.newRoom._id);
        }
    }

    addRoomHandle() {
        const namePoom = document.getElementById('Room-name').value;
        return this.props.dispatch(addRoom({ name: namePoom }, this.mas));
    }

    enterRoom(roomId) {
        this.props.dispatch(routeNavigation({
            page: 'chat_page',
            payload: {
                ...this.props.payload,
                currentRoom: roomId,
                prevPage: 'contacts_list',
            },
        }));
    }

    fetch() {
        return this.props.dispatch(fetchUsers());
    }

    render() {
        const listUses = this.props.items.map((el) => {
            const status = el.online ? 'online' : '';
            return (
                <InstanceSummaryElement
                    key={el._id}
                    summary={{
                        title: `${el.name}`,
                        author: `${status}`,
                    }}
                    handle={(e) => {
                        e.currentTarget.querySelector('.avatar')
                            .classList.toggle('avatar_choice');
                        if (this.mas.length === 0) {
                            this.mas.push(el._id);
                        } else if (this.mas.indexOf(el._id) < 0) {
                            this.mas.push(el._id);
                        } else {
                            this.mas.splice(this.mas.indexOf(el.id), 1);
                        }
                    }}
                />);
        });
        return (
            <div className="AddRoomPage">
                <ConnectedHeader buttonBack buttonAdd={this.addRoomHandle} contentType="add-room" />
                <InfiniteRooms fetchNext={this.fetch} next={this.props.next}>
                    {this.state.loading && (
                        <div className="spinner">
                            <div className="rect1" />
                            <div className="rect2" />
                            <div className="rect3" />
                            <div className="rect4" />
                            <div className="rect5" />
                        </div>
                    )}
                    {listUses}
                </InfiniteRooms>
            </div>
        );
    }
});

