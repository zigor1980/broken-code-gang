import React from 'react';
import {storiesOf} from '@storybook/react';
import {GroupChatSettings} from '../components/GroupChatSettings/GroupChatSettings'

storiesOf('GroupChatSettings', module)
    .add('no modifiers', () => (
        <GroupChatSettings />
    ));

