import React from 'react';
import {storiesOf} from '@storybook/react';
import {FooterNav} from '../components/FooterNav/FooterNav';

storiesOf('FooterNav', module)
    .add('Chats page', () => {
            return <FooterNav active='chat'/>
        }
    )
    .add('Contacts page', () => {
            return <FooterNav active='user'/>
        }
    )
    .add('Settings page', () => {
            return <FooterNav active='settings'/>
        }
    );
