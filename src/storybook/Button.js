import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../components/Button/Button';

storiesOf('Buttons', module)
    .add('User', () => {
        const icon = 'user';
        return (<div style={{
            display: 'flex',
            flexDirection: 'column',
        }}
        >
          <Button type={icon} active="a" modifier="s" />
          <Button type={icon} active="" modifier="s" />
          <Button type={icon} active="a" modifier="m" />
          <Button type={icon} active="" modifier="m" />
          <Button type={icon} active="a" modifier="l" />
          <Button type={icon} active="" modifier="l" />
        </div>);
    })
    .add('Add-user', () => {
        const icon = 'add-user';
        return (<div style={{
            display: 'flex',
            flexDirection: 'column',
        }}
        >
          <Button type={icon} active="a" modifier="s" />
          <Button type={icon} active="" modifier="s" />
          <Button type={icon} active="a" modifier="m" />
          <Button type={icon} active="" modifier="m" />
          <Button type={icon} active="a" modifier="l" />
          <Button type={icon} active="" modifier="l" />
        </div>);
    })
    .add('settings', () => {
        const icon = 'settings';
        return (<div style={{
            display: 'flex',
            flexDirection: 'column',
        }}
        >
          <Button type={icon} active="a" modifier="s" />
          <Button type={icon} active="" modifier="s" />
          <Button type={icon} active="a" modifier="m" />
          <Button type={icon} active="" modifier="m" />
          <Button type={icon} active="a" modifier="l" />
          <Button type={icon} active="" modifier="l" />
                </div>);
    })
    .add('Chat', () => {
        const icon = 'chat';
        return (<div style={{
            display: 'flex',
            flexDirection: 'column',
        }}
        >
          <Button type={icon} active="a" modifier="s" />
          <Button type={icon} active="" modifier="s" />
          <Button type={icon} active="a" modifier="m" />
          <Button type={icon} active="" modifier="m" />
          <Button type={icon} active="a" modifier="l" />
          <Button type={icon} active="" modifier="l" />
                </div>);
    })
    .add('Start-chat', () => {
        const icon = 'start-chat';
        return (<div style={{
            display: 'flex',
            flexDirection: 'column',
        }}
        >
          <Button type={icon} active="a" modifier="s" />
          <Button type={icon} active="" modifier="s" />
          <Button type={icon} active="a" modifier="m" />
          <Button type={icon} active="" modifier="m" />
          <Button type={icon} active="a" modifier="l" />
          <Button type={icon} active="" modifier="l" />
                </div>);
    })
    .add('Search', () => {
        const icon = 'search';
        return (<div style={{
            display: 'flex',
            flexDirection: 'column',
        }}
        >
          <Button type={icon} active="a" modifier="s" />
          <Button type={icon} active="" modifier="s" />
          <Button type={icon} active="a" modifier="m" />
          <Button type={icon} active="" modifier="m" />
          <Button type={icon} active="a" modifier="l" />
          <Button type={icon} active="" modifier="l" />
        </div>);
    })
    .add('Add', () => {
        const icon = 'add';
        return (<div style={{
            display: 'flex',
            flexDirection: 'column',
        }}
        >
          <Button type={icon} active="a" modifier="s" />
          <Button type={icon} active="" modifier="s" />
          <Button type={icon} active="a" modifier="m" />
          <Button type={icon} active="" modifier="m" />
          <Button type={icon} active="a" modifier="l" />
          <Button type={icon} active="" modifier="l" />
                </div>);
    })
    .add('Delete', () => {
        const icon = 'delete';
        return (<div style={{
            display: 'flex',
            flexDirection: 'column',
        }}
        >
          <Button type={icon} active="a" modifier="s" />
          <Button type={icon} active="" modifier="s" />
          <Button type={icon} active="a" modifier="m" />
          <Button type={icon} active="" modifier="m" />
          <Button type={icon} active="a" modifier="l" />
          <Button type={icon} active="" modifier="l" />
                </div>);
    })
    .add('Cancel', () => {
        const icon = 'cancel';
        return (<div style={{
            display: 'flex',
            flexDirection: 'column',
        }}
        >
          <Button type={icon} active="a" modifier="s" />
          <Button type={icon} active="" modifier="s" />
          <Button type={icon} active="a" modifier="m" />
          <Button type={icon} active="" modifier="m" />
          <Button type={icon} active="a" modifier="l" />
          <Button type={icon} active="" modifier="l" />
                </div>);
    });

