import React from 'react';
import { UserList } from '../UserList/UserList';
import { Button } from '../Button/Button';
import { LinkBtn } from '../Buttons/LinkBtn/LinkBtn';
import './GroupChatSettings.css';
import ConnectedHeader from '../Header/Header';
import { connect } from 'react-redux';
import leaveRoom from '../../actions/leaveRoom';
import { routeNavigation } from '../../actions/route';
import fetchUsers from '../../actions/fetchUsers';

const stateToProps = state => ({
    payload: state.route.payload,
    users: state.users.items,
    next: state.users.next,
});

export const GroupChatSettings = connect(stateToProps)(
    (props, dispatch) => {
        /**
         * Pass group chat members to UserList
         * props - group chat info
         */

        const membersQuan = 10,
            groupName = 'BCG',
            onClickExit = removeUserFromChat.bind(props),
            onClickAddNewUser = addNewUserToChat.bind(props);
        return (
            <div className="GroupChatSettings">
                <section className="GroupChatSettings__section">
                    {/* <h3 className="GroupChatSettings__title">{groupName}</h3>
                     <div className="GroupChatSettings__add-wrapper">
                     <Button type="add-user" active modifier="m" circle className="GroupChatSettings__add" />
                     </div>*/}
                    <div className="">
                        <ConnectedHeader contentTitle={groupName} contentDesc="" buttonBack buttonSearch={false}
                                         buttonSettings={false} contentType="chat"/>
                    </div>
                </section>
                <section className="GroupChatSettings__section">
                    <h4 className="GroupChatSettings__section__title">Members ({membersQuan})</h4>
                    <LinkBtn className="GroupChatSettings__exit" btnText="Добавить участника"
                             onclick={onClickAddNewUser}/>
                    <UserList
                        users={props.payload.chatUsers}
                    />
                </section>
                <section className="GroupChatSettings__section">
                    <LinkBtn className="GroupChatSettings__exit" btnText="Exit" onclick={onClickExit}/>
                </section>
            </div>
        );
    });

function removeUserFromChat() {
    this.dispatch(leaveRoom(this.payload.currentRoom));
}

function addNewUserToChat() {
    console.log('!!!', this);
    this.dispatch(routeNavigation({
        page: 'user_list',
        payload: {
            fetchNext: this.dispatch(fetchUsers),
            next: true,
            users: this.users,
        }
    }));
}
