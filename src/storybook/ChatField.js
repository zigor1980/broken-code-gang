import React from 'react';
import {storiesOf} from '@storybook/react';
import {ChatField} from '../components/ChatField/ChatField.js';

storiesOf('ChatField', module)
    .add('User message', () => {
            const message = {
                userId: "Артурчик",    // Идентификатор пользователя, отправившего сообщение (User._id)
                message: "Hello world",   // Текстовое сообщение
                created_at: new Date().toDateString() // Timestamp времени отправки
            };
            return <ChatField message={message} userId={"Артурчик"}/>
        }
    )
    .add('Other people message', () => {
            const message = {
                userId: "Леонардо",    // Идентификатор пользователя, отправившего сообщение (User._id)
                message: "Hello world",   // Текстовое сообщение
                created_at: new Date().toDateString() // Timestamp времени отправки
            };
            return <ChatField message={message} userId={"Артурчик"}/>
        }
    );
