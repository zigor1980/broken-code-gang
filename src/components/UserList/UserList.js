import * as React from 'react';
import { connect } from 'react-redux';
import { InstanceSummaryElement } from '../InstanceSummaryElement/InstanceSummaryElement';
import { InfiniteScroll } from '../InfiniteScroll/InfiniteScroll';
import './UserList.css';
import { routeNavigation } from '../../actions/route';
import addRoom from '../../actions/rooms';
import api from '../../api';

const stateToProps = state => ({
    users: state.users.items,
    next: state.users.next,
    curUserInfo: state.user.curUserInfo,
});

export class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // eslint-disable-next-line
            searchTerm: '',
        };
    }
    render() {
        const { users, fetchNext, next } = this.props;
        let userListContent = '';
        if (users && users.length) {
            userListContent = users.map(contact => (
                <InstanceSummaryElement
                    key={contact._id}
                    summary={{
                        title: `${contact.name}`,
                        author: `${contact.online ? 'online' : ''}`,
                        id: `${contact._id}`,
                    }}
                    handle={async () => {
                        const room = await api.isRoomExist(contact._id);
                        const { items } = room;
                        let usersArray;
                        let newRoom = '';
                        if (items && items.length) {
                            const usersName = {};
                            newRoom = items[0]._id;
                            items[0].users.forEach((user) => {
                                usersName[user._id] = user.name;
                            });
                            usersArray = usersName;
                        } else {
                            this.props.dispatch(addRoom({
                                name: `${this.props.curUserInfo.name} ${contact.name}`,
                                users: [contact._id],
                            }))
                                .then((result) => {
                                    newRoom = result._id;
                                    const usersName = {};
                                    result.users.forEach((user) => {
                                        usersName[user._id] = user.name;
                                    });
                                    usersArray = usersName;
                                });
                        }
                        this.props.dispatch(routeNavigation({
                            page: 'chat_page',
                            payload: {
                                usersName: usersArray,
                                currentRoom: newRoom,
                                prevPage: 'chat_list',
                            },
                        }));
                    }}
                />));
        } else {
            userListContent = <div className="UserList__empty"><p>No contacts here yet...</p></div>;
        }
        return (
            <InfiniteScroll fetchNext={fetchNext} scrollDirection="down" next={next}>
                <div className="UserList">
                    {userListContent}
                </div>
            </InfiniteScroll>
        );
    }
}

export const ConnectedUserList = connect(stateToProps)(UserList);
