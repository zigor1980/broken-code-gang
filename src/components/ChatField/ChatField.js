import React from 'react';
import { ChatQuote } from '../ChatQuote/ChatQuote';
import Avatar from '../Avatar/Avatar';
import './ChatField.css';

export function ChatField(props) {
    const { message, name, userId } = props,
        authorId = message.userId;

    let direction = 'ChatField_right',
        avatar = '';

    if (authorId !== userId) {
        direction = 'ChatField_left';
        /*
         *Здесь загружаем иконку аватара по userId
         // avatar = <Avatar image = {{src:userId.getImageSrc(),modifier:'avatar-s'}}>;
         */
        /* аватарка по умолчанию */
        avatar = <Avatar caption={name} modifier="m" />;
    }
    return (
        <div className={direction}>
            {avatar}
            <ChatQuote message={message} userId={userId} name={name} />
        </div>
    );
}
