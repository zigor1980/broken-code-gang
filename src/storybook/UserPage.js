import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { UserPage } from '../components/UserPage/UserPage';

const userInfo =
    {
      userLogin: 'Пользователь-1',
      userAvatar: {
        src: 'https://avatars.mds.yandex.net/get-pdb/752643/e71329fb-9011-441e-b3ff-81cfef14a13c/s1200',
        modifier: 'avatar-s',
      },
    };

storiesOf('UserPage', module)
  .add('with user information', () => (
    <UserPage userInfo={userInfo} />
  ));
