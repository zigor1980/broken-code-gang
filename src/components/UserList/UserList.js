import * as React from 'react';
import { connect } from 'react-redux';
import { InstanceSummaryElement } from '../InstanceSummaryElement/InstanceSummaryElement';
import { InfiniteScroll } from '../InfiniteScroll/InfiniteScroll';
import './UserList.css';
import { routeNavigation } from '../../actions/route';
import api from '../../api';

const stateToProps = state => ({
    users: state.users.items,
    next: state.users.next,
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
                        if (items && items.length) {
                            const usersName = {};
                            items[0].users.forEach((user) => {
                                usersName[user._id] = user.name;
                            });
                            this.props.dispatch(routeNavigation({
                                page: 'chat_page',
                                payload: {
                                    usersName,
                                    currentRoom: items[0]._id,
                                    prevPage: 'chat_list',
                                },
                            }));
                        }
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
