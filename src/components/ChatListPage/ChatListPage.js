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
    error: state.rooms.error,
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

    componentWillMount() {
        const { items } = this.props;
        if (!(items && items.length)) {
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
        } else {
            this.setState({
                loading: false,
            });
        }
    }

    componentWillUpdate() {

    }

    componentWillUnmount() {
        this.destroy = true;
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
        let { items } = this.props;
        if (items) {
            items = items.sort((a, b) => {
                if ((a.lastMessage) || (b.lastMessage) ||
                (a.lastMessage.created_at === null) || (b.lastMessage.created_at === null)) {
                    return 0;
                }
                return a.lastMessage.created_at > b.lastMessage.created_at ? 1 : -1;
            });
        }
        return (
            <div className="ChatListPage">
                <ConnectedHeader buttonInfo buttonAdd={this.submitHandler} contentType="chats" />
                {this.state.loading ? (
                    <div className="spinner">
                        <div className="rect1" />
                        <div className="rect2" />
                        <div className="rect3" />
                        <div className="rect4" />
                        <div className="rect5" />
                    </div>
                ) : (
                    <ChatList
                        rooms={items}
                        fetchNext={this.fetch}
                        next={this.props.next}
                    />
                )}
                {this.state.error && (
                    <div>
                        Something is BROKEN!!!
                        <p>{this.state.error.message}</p>
                    </div>
                )}
                <FooterNav active="dialogs" />
            </div>
        );
    }
});

