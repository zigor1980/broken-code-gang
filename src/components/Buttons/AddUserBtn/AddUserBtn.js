import React from 'react';
import addUser from '../../../assets/icons/add-user.png';

export function AddUserBtn(props) {
    return(
        <img className={props.className} src={addUser} alt="Add user to group chat" />
    )
}