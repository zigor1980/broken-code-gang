import React from 'react';
import { storiesOf } from '@storybook/react';
import { ContactsListPage } from '../components/ContactsListPage/ContactsListPage';

storiesOf('ContactsListPage', module)
    .add('no modifiers', () => (
      <ContactsListPage />
    ));
