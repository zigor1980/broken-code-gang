import React from 'react';
import { storiesOf } from '@storybook/react';
import { ChatListPage } from '../components/ChatListPage/ChatListPage';

storiesOf('ChatListPage', module)
    .add('no modifiers', () => (
        <ChatListPage />
    ));
