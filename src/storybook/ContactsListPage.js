import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ContactsListPage } from '../components/ContactsListPage/ContactsListPage';

storiesOf('ContactsListPage', module)
    .add('no modifiers', () => (
            <ContactsListPage />
        )
    );
