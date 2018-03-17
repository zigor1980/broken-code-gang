import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Avatar } from '../components/Avatar/Avatar';


storiesOf('Avatar', module)
    .add('size S', () => (
        <Avatar image={{
            "src": "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
            "modifier": "avatar-s"
        }} />
    ))
    .add('size M', () => (
        <Avatar image={{
            "src": "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
            "modifier": "avatar-m"
        }}/>
    ));  