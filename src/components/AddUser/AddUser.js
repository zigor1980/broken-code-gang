import React from 'react';
import Header from '../Header/Header';
import { UserList } from '../UserList/UserList';

import './AddUser.css';

export default function AddUser() {
    /*
    * Get user's connections
    * */
    return (
        <div className="AddUser">
            <Header buttonBack buttonSearch buttonSettings={false} contentType="add-user" />
            <UserList />
        </div>
    );
}
