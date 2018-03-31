import React from "react";
import { InstanceSummaryElement } from "../InstanceSummaryElement/InstanceSummaryElement";

import "./UserList.css";

export function UserList(props) {
    /*
    * Get user's contacts list. Get
    *   - avatar
    *   - username
    *   - online/last seen date
    *   - contact id
    * for each contact.
    * */

    const userContacts = [
        {
            avatar: {
                src: "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                modifier: "avatar-s",
            },
            title: "Darya Nadolskaya",
            description: "online",
            id: 1,
        },
        {
            avatar: {
                src: "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                modifier: "avatar-s",
            },
            title: "Darya Nadolskaya",
            description: "online",
            id: 2,
        },
        {
            avatar: {
                src: "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                modifier: "avatar-s",
            },
            title: "Darya Nadolskaya",
            description: "online",
            id: 3,
        },
        {
            avatar: {
                src: "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                modifier: "avatar-s",
            },
            title: "Darya Nadolskaya",
            description: "online",
            id: 4,
        },
        {
            avatar: {
                src: "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                modifier: "avatar-s",
            },
            title: "Darya Nadolskaya",
            description: "online",
            id: 5,
        },
        {
            avatar: {
                src: "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                modifier: "avatar-s",
            },
            title: "Darya Nadolskaya",
            description: "online",
            id: 6,
        },
        {
            avatar: {
                src: "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                modifier: "avatar-s",
            },
            title: "Darya Nadolskaya",
            description: "online",
            id: 7,
        },
        {
            avatar: {
                src: "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                modifier: "avatar-s",
            },
            title: "Darya Nadolskaya",
            description: "online",
            id: 8,
        },
        {
            avatar: {
                src: "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                modifier: "avatar-s",
            },
            title: "Darya Nadolskaya",
            description: "online",
            id: 9,
        },
        {
            avatar: {
                src: "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                modifier: "avatar-s",
            },
            title: "Darya Nadolskaya",
            description: "online",
            id: 10,
        },

    ];

    const userList = userContacts.map((contact, index) =>
        <InstanceSummaryElement key={contact.id} summary={contact} />);

    return (
        <div className="UserList">
            {userList}
      </div>
    );
}
