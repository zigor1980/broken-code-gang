import React from 'react';
import api from '../../api';
import './ChatQuote.css';

export class ChatQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorName: null
        }
    }

    async getAuthorName(id) {
        const authorName = await api.getUser(id);
        this.setState({
            authorName: authorName.name,
        });
    }

    render() {
        const { message: text, created_at: created_at, userId: authorId } = this.props.message,
            userId = this.props.userId;
        let chatDirection = 'ChatQuote_right',
            user = '',
            date = new Date();

        date.setTime(created_at);

        if (userId !== authorId) {
            if (!this.state.authorName)
                this.getAuthorName(authorId);
            chatDirection = 'ChatQuote_left';
            user = <p className="ChatQuote__user">{this.state.authorName}</p>
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
