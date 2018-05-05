import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../components/Avatar/Avatar';

storiesOf('Avatar', module)
    .add('size S', () => (
      <Avatar 
        caption={'igor zayac'}
        modifier={'s'}
        />
    ))
    .add('size M', () => (
        <Avatar
            caption={'igor zayac'}
            modifier={'m'}
        />
    ))
    .add('size L', () => (
        <Avatar
            caption={'igor zayac'}
            modifier={'l'}
        />
    ));
