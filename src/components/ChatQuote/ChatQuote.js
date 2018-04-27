import React from 'react';
import './ChatQuote.css';

export class ChatQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorName: null
        }
    }

    render() {
        const { message: text, userId: authorId, created_at } = this.props.message,
            userId = this.props.userId;
        let chatDirection = 'ChatQuote_right',
            user = '',
            date = new Date();

        date.setTime(created_at);

        if (userId !== authorId) {
            chatDirection = 'ChatQuote_left';
            user = <p className="ChatQuote__user">{this.props.name}</p>
        }
        return (
            <div className={`ChatQuote ${chatDirection}`}>
                {user}
                <p className="ChatQuote__text">{text}</p>
                <p className="ChatQuote__timestamp">{date.toLocaleString()}</p>
            </div>
        );
    }
}
