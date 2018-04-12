import * as React from 'react';
import { connect } from 'react-redux';
import './ChatListPage.css';
import { ConnectedHeader } from '../Header/Header';
import { ChatList } from '../ChatList/ChatList';
import { FooterNav } from '../FooterNav/FooterNav';
import fetchRooms from '../../actions/fetchRooms';
import { routeNavigation } from '../../actions/route';

const stateToProps = state => ({
    items: state.rooms.items,
    next: state.rooms.next,
    end: state.rooms.end,
    payload: state.route.payload,
    user: state.user,
});

export const ChatListPage = connect(stateToProps)(class ChatListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            addRoomVisible: false,
        };
        this.fetch = this.fetch.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
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

    submitHandler() {
        this.props.dispatch(routeNavigation({
            page: 'add_room_page',
            payload: {
                ...this.props.payload,
                prevPage: 'chat_list',
            },
        }));
    }

    render() {
        return (
            <div className="ChatListPage">
                <ConnectedHeader buttonBack={false} buttonSearch buttonSettings={false} contentType="chats" />
                <ChatList
                    rooms={this.props.items}
                    fetchNext={this.fetch}
                    next={this.props.next}
                />
                <FooterNav active={this.props.payload.footerNav.active} />
                <button className="ChatList_AddButton" onClick={this.submitHandler} >+</button>
            </div>
        );
    }
});

