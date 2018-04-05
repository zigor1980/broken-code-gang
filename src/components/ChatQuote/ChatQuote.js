import React from 'react';
import './ChatQuote.css';

export function ChatQuote(props) {
    const { message: text, created_at: date, userId: authorId } = props.message,
        userId = props.userId;
    let chatDirection = 'ChatQuote_right',
        user = '';

    if (userId !== authorId) {
        chatDirection = 'ChatQuote_left';
        user = <p className="ChatQuote__user">{authorId}</p>;
    }

    return (
        <div className={`ChatQuote ${chatDirection}`}>
            {user}
            <p className="ChatQuote__text">{text}</p>
            <p className="ChatQuote__timestamp">{date}</p>
        </div>
    );
}
