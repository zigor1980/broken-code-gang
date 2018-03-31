import React from 'react';
import { InstanceSummaryElement } from '../InstanceSummaryElement/InstanceSummaryElement';

import './ChatList.css';

export function ChatList(props) {
    /*
    * Get user's latest chats list. Get
    *   - the last message id
    *   - the last message author
    *   - the last message content
    *   - avatar
    *   - chat name
    * for each chat.
    * */

    const latestChats = [
        {
            avatar: {
                src: 'https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200',
                modifier: 'avatar-s',
            },
            title: 'BrokenCodeGang',
            description: 'Да, зафиксирую информацию про завтра.\n' +
            'Ждём всех в 10.00. Не опаздывать!\n' +
            'ШРИкатон продлится до 18.00.\n' +
            'С собой: ноутбуки. Лучше подготовиться и установить на них nodejs и mongodb',
            author: 'Bibushik',
            id: 1,
        },
        {
            avatar: {
                src: 'https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200',
                modifier: 'avatar-s',
            },
            title: 'BrokenCodeGang',
            description: 'Да, зафиксирую информацию про завтра.\n' +
            'Ждём всех в 10.00. Не опаздывать!\n' +
            'ШРИкатон продлится до 18.00.\n' +
            'С собой: ноутбуки. Лучше подготовиться и установить на них nodejs и mongodb',
            author: 'Bibushik',
            id: 2,
        },
        {
            avatar: {
                src: 'https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200',
                modifier: 'avatar-s',
            },
            title: 'BrokenCodeGang',
            description: 'Да, зафиксирую информацию про завтра.\n' +
            'Ждём всех в 10.00. Не опаздывать!\n' +
            'ШРИкатон продлится до 18.00.\n' +
            'С собой: ноутбуки. Лучше подготовиться и установить на них nodejs и mongodb',
            author: 'Bibushik',
            id: 3,
        },
        {
            avatar: {
                src: 'https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200',
                modifier: 'avatar-s',
            },
            title: 'BrokenCodeGang',
            description: 'Да, зафиксирую информацию про завтра.\n' +
            'Ждём всех в 10.00. Не опаздывать!\n' +
            'ШРИкатон продлится до 18.00.\n' +
            'С собой: ноутбуки. Лучше подготовиться и установить на них nodejs и mongodb',
            author: 'Bibushik',
            id: 4,
        },
        {
            avatar: {
                src: 'https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200',
                modifier: 'avatar-s',
            },
            title: 'BrokenCodeGang',
            description: 'Да, зафиксирую информацию про завтра.\n' +
            'Ждём всех в 10.00. Не опаздывать!\n' +
            'ШРИкатон продлится до 18.00.\n' +
            'С собой: ноутбуки. Лучше подготовиться и установить на них nodejs и mongodb',
            author: 'Bibushik',
            id: 5,
        },
        {
            avatar: {
                src: 'https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200',
                modifier: 'avatar-s',
            },
            title: 'BrokenCodeGang',
            description: 'Да, зафиксирую информацию про завтра.\n' +
            'Ждём всех в 10.00. Не опаздывать!\n' +
            'ШРИкатон продлится до 18.00.\n' +
            'С собой: ноутбуки. Лучше подготовиться и установить на них nodejs и mongodb',
            author: 'Bibushik',
            id: 6,
        },
        {
            avatar: {
                src: 'https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200',
                modifier: 'avatar-s',
            },
            title: 'BrokenCodeGang',
            description: 'Да, зафиксирую информацию про завтра.\n' +
            'Ждём всех в 10.00. Не опаздывать!\n' +
            'ШРИкатон продлится до 18.00.\n' +
            'С собой: ноутбуки. Лучше подготовиться и установить на них nodejs и mongodb',
            author: 'Bibushik',
            id: 7,
        },
        {
            avatar: {
                src: 'https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200',
                modifier: 'avatar-s',
            },
            title: 'BrokenCodeGang',
            description: 'Да, зафиксирую информацию про завтра.\n' +
            'Ждём всех в 10.00. Не опаздывать!\n' +
            'ШРИкатон продлится до 18.00.\n' +
            'С собой: ноутбуки. Лучше подготовиться и установить на них nodejs и mongodb',
            author: 'Bibushik',
            id: 8,
        },
        {
            avatar: {
                src: 'https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200',
                modifier: 'avatar-s',
            },
            title: 'BrokenCodeGang',
            description: 'Да, зафиксирую информацию про завтра.\n' +
            'Ждём всех в 10.00. Не опаздывать!\n' +
            'ШРИкатон продлится до 18.00.\n' +
            'С собой: ноутбуки. Лучше подготовиться и установить на них nodejs и mongodb',
            author: 'Bibushik',
            id: 9,
        },
        {
            avatar: {
                src: 'https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200',
                modifier: 'avatar-s',
            },
            title: 'BrokenCodeGang',
            description: 'Да, зафиксирую информацию про завтра.\n' +
            'Ждём всех в 10.00. Не опаздывать!\n' +
            'ШРИкатон продлится до 18.00.\n' +
            'С собой: ноутбуки. Лучше подготовиться и установить на них nodejs и mongodb',
            author: 'Bibushik',
            id: 10,
        },

    ];

    const chatList = latestChats.map((chat, index) =>
      <InstanceSummaryElement key={chat.id} summary={chat} />);

    return (
      <div className="ChatList">
          {chatList}
        </div>
    );
}
