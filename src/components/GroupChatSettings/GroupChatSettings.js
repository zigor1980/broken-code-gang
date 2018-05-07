import React from 'react';
import { connect } from 'react-redux';
import { UserList } from '../UserList/UserList';
import { LinkBtn } from '../Buttons/LinkBtn/LinkBtn';
import './GroupChatSettings.css';
import { ConnectedHeader } from '../Header/Header';
import leaveRoom from '../../actions/leaveRoom';
import { routeNavigation } from '../../actions/route';
import fetchUsers from '../../actions/fetchUsers';

function removeUserFromChat() {
    this.dispatch(leaveRoom(this.payload.currentRoom));
}

function addNewUserToChat() {
    this.dispatch(routeNavigation({
        page: 'add_new_user_to_chat_page',
        payload: {
            prevPage: 'chat_settings',
            prevPrevPage: this.payload.prevPage,
            prevPrevPrevPage: this.payload.prevPrevPage,
        },
    }));
}

function openUserMenu() {
    /* Здесь меню действий над пользователем в групповом чате */
}

const stateToProps = state => ({
    payload: state.route.payload,
    users: state.users.items,
    next: state.users.next,
});
// eslint-disable-next-line
export const GroupChatSettings = connect(stateToProps)((props, dispatch) => {
    const membersQuan = props.payload.chatUsers.length,
        groupName = 'BCG',
        onClickExit = removeUserFromChat.bind(props),
        fetchNext = props.dispatch.bind(props, fetchUsers()),
        onClickAddNewUser = addNewUserToChat.bind(props, fetchNext),
        handleClick = openUserMenu.bind(props);
    return (
        <div className="GroupChatSettings">
            <section className="GroupChatSettings__section">
                {/* <h3 className="GroupChatSettings__title">{groupName}</h3>
                     <div className="GroupChatSettings__add-wrapper">
                     <Button type="add-user" active modifier="m" circle className="GroupChatSettings__add" />
                     </div> */}
                <div className="">
                    <ConnectedHeader
                        contentTitle={groupName}
                        contentDesc=""
                        buttonBack
                        buttonSearch={false}
                        buttonSettings={false}
                        contentType="chat"
                    />
                </div>
            </section>
            <section className="GroupChatSettings__section">
                <h4 className="GroupChatSettings__section__title">Members ({membersQuan})</h4>
                <LinkBtn
                    className="GroupChatSettings__exit"
                    btnText="Добавить участника"
                    onclick={onClickAddNewUser}
                />
                <UserList
                    users={props.payload.chatUsers}
                    handleClick={handleClick}
                />
            </section>
            <section className="GroupChatSettings__section">
                <LinkBtn className="GroupChatSettings__exit" btnText="Exit" onclick={onClickExit} />
            </section>
        </div>
    );
});
