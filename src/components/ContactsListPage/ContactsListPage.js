import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import { UserList } from '../UserList/UserList';
import { FooterNav } from '../FooterNav/FooterNav';
import fetchUsers from '../../actions/fetchUsers';
import addRoom from '../../actions/rooms';
import { routeNavigation } from '../../actions/route';
import api from '../../api';

import './ContactsListPage.css';

const stateToProps = state => ({
    users: state.users.items,
    next: state.users.next,
    end: state.users.end,
    error: state.users.error,
    currentUserRooms: state.rooms.items,
    newRoom: state.rooms.newRoom,
    curUserInfo: state.user.curUserInfo,
});


export class ContactsListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            searchTerm: '',
            displayedContacts: this.props.users,
        };
        this.fetch = this.fetch.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.resetSearch = this.resetSearch.bind(this);
    }

    componentWillReceiveProps(props) {
        if (props.newRoom && (!this.props.newRoom || props.newRoom._id !== this.props.newRoom._id)) {
            this.enterRoom(props.newRoom._id);
        }
    }

    fetch() {
        return this.props.dispatch(fetchUsers());
    }

    async enterRoom(roomId) {
        const users = await api.getUsersOfRoom(roomId),
            usersName = {};
        users.items.forEach((user) => {
            usersName[user._id] = user.name;
        });
        this.props.dispatch(routeNavigation({
            page: 'chat_page',
            payload: {
                ...this.props.payload,
                usersName,
                currentRoom: roomId,
                prevPage: 'contacts_list',
            },
        }));
    }

    async createRoom(contactId) {
        const UserName = await api.getUser(contactId);
        const curUserName = this.props.curUserInfo.name;
        this.props.dispatch(addRoom({ name: `${UserName.name} ${curUserName}` }, [contactId]));
    }

    handleClick(contactId) {
        /*
         * if !next all currentUserRooms has been fetched
         */
        const createRoom = this.createRoom;
        const enterRoom = this.enterRoom;

        function searchCommonRoom(currentUserRooms) {
            const userRooms = currentUserRooms.items || currentUserRooms;
            const commonRoom = userRooms.filter((room) => {
                const { users } = room;
                return (users.length === 2 && users.includes(contactId));
            });
            return commonRoom;
        }

        async function decideAsync(createRoom, enterRoom) {
            const currentUserRooms = await api.getCurrentUserRooms();
            const commonRoom = searchCommonRoom(currentUserRooms);
            if (!commonRoom.length) {
                createRoom(contactId);
            } else if (commonRoom.length === 1) {
                enterRoom(commonRoom[0]._id);
            }
        }

        let currentUserRooms = [];
        if (!this.props.next) {
            currentUserRooms = this.props.currentUserRooms;
            const commonRoom = searchCommonRoom(currentUserRooms);
            if (!commonRoom.length) {
                createRoom(contactId);
            } else if (commonRoom.length === 1) {
                enterRoom(commonRoom[0]._id);
            }
        } else {
            decideAsync(createRoom, enterRoom);
        }
    }

    handleSearch(event) {
        const searchQuery = event.target.value.toLowerCase();

        this.setState({
            searchTerm: searchQuery,
        });
    }

    resetSearch() {
        this.setState({
            searchTerm: '',
        });
    }

    render() {
        let displayedContacts = [];
        const searchQuery = this.state.searchTerm;
        if (searchQuery && this.props.users) {
            displayedContacts = this.props.users.filter(user => (user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())));
        } else {
            displayedContacts = this.props.users;
        }
        return (
            <div className="ContactsListPage">
                <Header buttonBack={false} buttonSearch searchIsOn={searchQuery} resetSearch={this.resetSearch} handleSearch={this.handleSearch} buttonSettings={false} contentType="contacts" />
                <UserList
                    users={displayedContacts}
                    fetchNext={this.fetch}
                    next={this.props.next}
                    handleClick={this.handleClick}
                />
                <FooterNav active="user" />
            </div>
        );
    }
}

export const ConnectedContactsListPage = connect(stateToProps)(ContactsListPage);
