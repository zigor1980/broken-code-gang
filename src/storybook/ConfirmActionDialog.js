import React from 'react';
import { storiesOf } from '@storybook/react';
import { ConfirmActionDialog } from '../components/ConfirmActionDialog/ConfirmActionDialog';

storiesOf('ConfirmActionDialog', module)
  .add('no modifiers', () => (
    <ConfirmActionDialog />
  ));
