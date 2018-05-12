import React from 'react';
import { ChatQuote } from '../ChatQuote/ChatQuote';
import Avatar from '../Avatar/Avatar';
import './ChatField.css';

export function ChatField(props) {
    const {
            avatar,
            message,
            name,
            userId,
        } = props,
        authorId = message.userId;
    let direction = 'ChatField_right',
        ava = '';
    const title = avatar ? 'true' : '';
    if (authorId !== userId) {
        direction = 'ChatField_left';
        /*
         *Здесь загружаем иконку аватара по userId
         // avatar = <Avatar image = {{src:userId.getImageSrc(),modifier:'avatar-s'}}>;
         */
        /* аватарка по умолчанию */
        ava = avatar === 'true' ? <Avatar caption={name} modifier="m" /> : null;
    }
    return (
        <div className={direction}>
            {ava}
            <ChatQuote title={title} message={message} userId={userId} name={name} />
        </div>
    );
}
