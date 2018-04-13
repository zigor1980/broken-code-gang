import React, { Component } from 'react';
import Header from '../Header/Header';
import { UserList } from '../UserList/UserList';
import { FooterNav } from '../FooterNav/FooterNav';
import { connect } from 'react-redux';
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
    newRoom: state.rooms.newRoom
});


export class ContactsListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            searchTerm: '',
            displayedContacts: this.props.users
        };
        this.fetch = this.fetch.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.resetSearch = this.resetSearch.bind(this);
    }

    fetch() {
        return this.props.dispatch(fetchUsers());
    }

    componentWillReceiveProps(props) {
        if (props.newRoom && (!this.props.newRoom || props.newRoom._id !== this.props.newRoom._id)) {
            this.enterRoom(props.newRoom._id);
        }
    }

    enterRoom = (roomId) => {
        this.props.dispatch(routeNavigation({
            page: 'chat_page',
            payload: {
                ...this.props.payload,
                currentRoom: roomId,
                prevPage: 'contacts_list'
            },
        }));
    };

    createRoom = async (contactId) => {
        const UserName = await api.getUser(contactId);
        this.props.dispatch(addRoom({ name: `Chat with ${UserName.name}` }, [contactId]));
    };

    handleClick(contactId) {
        /*
         * if !next all currentUserRooms has been fetched
         */
        let createRoom = this.createRoom;
        let enterRoom = this.enterRoom;

        function searchCommonRoom(currentUserRooms) {
            const userRooms = currentUserRooms.items || currentUserRooms;
            const commonRoom = userRooms.filter((room) => {
                const { users } = room;
                return (users.length === 2 && users.includes(contactId));
            });
            return commonRoom;
        }

        async function decideAsync(createRoom, enterRoom) {
            let currentUserRooms = await api.getCurrentUserRooms();
            let commonRoom = searchCommonRoom(currentUserRooms);
            if (!commonRoom.length) {
                createRoom(contactId);
            } else if (commonRoom.length === 1) {
                enterRoom(commonRoom[0]._id);
            }

        }

        let currentUserRooms = [];
        if (!this.props.next) {
            currentUserRooms = this.props.currentUserRooms;
            let commonRoom = searchCommonRoom(currentUserRooms);
            if (!commonRoom.length) {
                createRoom(contactId);
            } else if (commonRoom.length === 1) {
                enterRoom(commonRoom[0]._id);
            }
        } else {
            let commonRooms = decideAsync(createRoom, enterRoom);
        }
    }

    handleSearch(event){
        const searchQuery = event.target.value.toLowerCase();

        this.setState({
            searchTerm: searchQuery,
        });
    }

    resetSearch(){
        this.setState({
            searchTerm: '',
        });
    }

    render() {
        let displayedContacts = [];
        let searchQuery = this.state.searchTerm;
        if(searchQuery && this.props.users){
            displayedContacts = this.props.users.filter( (user) => {
                return (user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase()));
            })
        } else {
            displayedContacts = this.props.users;
        }
        return (
            <div className="ContactsListPage">
                <Header buttonBack={false} buttonSearch searchIsOn={searchQuery} resetSearch={this.resetSearch} handleSearch={this.handleSearch}  buttonSettings={false} contentType="contacts" />
                <UserList
                    users={displayedContacts}
                    fetchNext={this.fetch}
                    next={this.props.next}
                    handleClick={this.handleClick}
                />
                <FooterNav active="user"/>
            </div>
        );
    }
}

export const ConnectedContactsListPage = connect(stateToProps)(ContactsListPage);
