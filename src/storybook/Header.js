import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '../components/Header/Header';

storiesOf('Header', module)
    .add('ChatHeader', () => <Header buttonExit buttonHeaderRight />);
