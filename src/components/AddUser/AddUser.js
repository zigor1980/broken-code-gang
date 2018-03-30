import React, {Component} from 'react';
import {Header} from "../Header/Header";
import {UserList} from "../UserList/UserList";
import {ConfirmActionDialog} from "../ConfirmActionDialog/ConfirmActionDialog";

import './AddUser.css';

export class AddUser extends Component {

    state = {
        confirmActionDialog: false
    }

    /*
    * TODO add onClick handler to userList (toggle confirmActionDialog)
    * */



    render () {
        /*
        * Get user's connections
        * */
        const userConnections = [
            {
                "avatar": {
                    "src": "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                    "modifier": "avatar-s"
                },
                "title": "Darya Nadolskaya",
                "description": "online",
                "id": 1
            },
            {
                "avatar": {
                    "src": "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                    "modifier": "avatar-s"
                },
                "title": "Darya Nadolskaya",
                "description": "online",
                "id": 2
            },
            {
                "avatar": {
                    "src": "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                    "modifier": "avatar-s"
                },
                "title": "Darya Nadolskaya",
                "description": "online",
                "id": 3
            },
            {
                "avatar": {
                    "src": "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                    "modifier": "avatar-s"
                },
                "title": "Darya Nadolskaya",
                "description": "online",
                "id": 4
            },
            {
                "avatar": {
                    "src": "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                    "modifier": "avatar-s"
                },
                "title": "Darya Nadolskaya",
                "description": "online",
                "id": 5
            },
            {
                "avatar": {
                    "src": "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                    "modifier": "avatar-s"
                },
                "title": "Darya Nadolskaya",
                "description": "online",
                "id": 6
            },
            {
                "avatar": {
                    "src": "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                    "modifier": "avatar-s"
                },
                "title": "Darya Nadolskaya",
                "description": "online",
                "id": 7
            },
            {
                "avatar": {
                    "src": "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                    "modifier": "avatar-s"
                },
                "title": "Darya Nadolskaya",
                "description": "online",
                "id": 8
            },
            {
                "avatar": {
                    "src": "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                    "modifier": "avatar-s"
                },
                "title": "Darya Nadolskaya",
                "description": "online",
                "id": 9
            },
            {
                "avatar": {
                    "src": "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                    "modifier": "avatar-s"
                },
                "title": "Darya Nadolskaya",
                "description": "online",
                "id": 10
            },

        ]
        return (
            <React.Fragment>
                <Header buttonExit={true} buttonHeaderRight={true}/>
                <UserList summary={userConnections}/>
            </React.Fragment>
        )
    }
}
