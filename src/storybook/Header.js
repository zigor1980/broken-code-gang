import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../components/Header/Header';

storiesOf('Header', module)
    .add('CaptionHeader', () => 
        <Header
            contentType='caption'
        />
    )
    .add('ChatHeader', () => 
        <Header
            buttonBack
            buttonHeaderRight
            contentTitle = 'Имя собеседника'
            contentDesc = 'Доп. информация'
            contentType='chat'
        />
    )
    .add('InputHeader', () => <Header buttonBack buttonAdd={()=>{alert()}} contentType='add-room'/>);
