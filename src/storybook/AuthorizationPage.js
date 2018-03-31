import React from 'react';
import { storiesOf } from '@storybook/react';
import { AuthorizationPage } from '../components/AuthorizationPage/AuthorizationPage';


storiesOf('AuthorizationPage', module)
  .add('Sign in & Sign up', () => (
    <AuthorizationPage />
  ));
