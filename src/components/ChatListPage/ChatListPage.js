import * as React from 'react';
import { connect } from 'react-redux';
import './ChatListPage.css';
import Header from '../Header/Header';
import ChatList from '../ChatList/ChatList';
import { FooterNav } from '../FooterNav/FooterNav';
import fetchRooms from '../../actions/fetchRooms';
import addRoom from '../../actions/rooms';

const stateToProps = state => ({
    items: state.rooms.items,
    next: state.rooms.next,
});

export const ChatListPage = connect(stateToProps)(
    class ChatListPage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                addRoomVisible: false,
            };
            this.fetch = this.fetch.bind(this);
            this.addRoom = this.addRoom.bind(this);
        }

        componentDidMount() {
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

        fetch() {
            return this.props.dispatch(fetchRooms());
        }

        addRoom() {
            let name = document.getElementById('Room-name').value;
            this.setState({
                addRoomVisible: !this.state.addRoomVisible,
            });
            return this.props.dispatch(addRoom(null, { name: name }));
        };

        visibilityForm = () => this.setState({
            addRoomVisible: !this.state.addRoomVisible,
        });


        render() {
            const addRoomForm = this.state.addRoomVisible &&
                <div className="ChatList_AddForm" onClick={ this.visibilityForm } >
                    <div className="ChatList_AddForm_InputField" onClick={ event => event.stopPropagation() }>
                        <h3>Введите название беседы</h3>
                        <input type="text" id="Room-name" className="InputField_Name" />
                        <p>
                            <button className="InputField_Accept" onClick={ this.addRoom }>OK</button>
                            <button className="InputField_Accept" onClick={ this.visibilityForm }>Cancel</button>
                        </p>
                    </div>
                </div>;
            return (
                <div className="ChatListPage">
                    { addRoomForm }
                    <Header buttonBack buttonSearch buttonSettings={false} contentType="chats" />
                    <ChatList rooms={this.props.items} fetchNext={this.fetch} />
                    <FooterNav active="chat" />
                    <button className="ChatList_AddButton" onClick={ this.visibilityForm } >+</button>
                </div>
            );
        }
    });

