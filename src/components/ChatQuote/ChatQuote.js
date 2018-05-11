import React from 'react';
import formatMessage from '../../helpers/formatMessage';
import formatSmiles from '../../helpers/formatSmiles';
import formatLinks from '../../helpers/formatLinks';
import formatBold from '../../helpers/formatBold';
import formatColor from '../../helpers/formatColor';
import formatList from '../../helpers/formatList';
import './ChatQuote.css';

export function ChatQuote({
    title,
    message,
    userId,
    name,
}) {
    // eslint-disable-next-line
    const { message: text, userId: authorId, created_at } = message,
        date = new Date();
    let chatDirection = 'ChatQuote_right',
        user = '';
    date.setTime(created_at);

    if (userId !== authorId) {
        chatDirection = 'ChatQuote_left';
        user = title ? <p className="ChatQuote__user">{name}</p> : null;
    }


    const rules = [formatSmiles, formatLinks, formatBold, formatColor, formatList];
    const editedMessageParts = formatMessage(text, rules);
    const partsQuan = editedMessageParts.length;
    const imagesUrls = [];
    if (partsQuan > 1) {
        for (let i = 0; i < partsQuan; i++) {
            if (editedMessageParts[i].type === 'image') {
                imagesUrls.push(editedMessageParts[i].src);
            }
        }
    }

    const messageImages = imagesUrls.map(url => <img className="ChatQuote__extra__img" src={url} alt="" />);
    let id = -1;
    const content = editedMessageParts.map((token) => {
        id++;
        switch (token.type) {
        case 'smile':
            return (
                <img
                    key={id}
                    className="ChatQuote__text__smile"
                    src={require(`../../assets/icons/${token.src}`)}
                    alt=""
                />);
        case 'link':
            return (
                <a
                    key={id}
                    className="ChatQuote__text__link"
                    href={token.src}
                    target="_blank"
                >
                    {`${token.src} `}
                </a>);
        case 'bold':
            return (
                <b key={id}>
                    {`${token.bold} `}
                </b>);
        case 'color':
            return (
                <span key={id} style={{ color: `${token.color}` }}>{`${token.text} `}</span>
            );
        case 'list': {
            const lists = token.items.map(list => <li key={token.items.indexOf(list)}>{`${list}`}</li>);
            return (
                <ul key={id} >{lists}</ul>
            );
        }
        case 'image':
            if (partsQuan === 1) {
                return <img key={id} className="ChatQuote__text__img" src={token.src} alt="" />;
            }
            return (
                <a
                    key={id}
                    className="ChatQuote__text__link"
                    href={token.src}
                    target="_blank"
                >
                    {`${token.src} `}
                </a>);

        default:
            return <span key={id}>{`${token.text} `}</span>;
        }
    });
    return (
        <div className={`ChatQuote ${chatDirection}`}>
            {user}
            <div className="ChatQuote__text">
                {content}
            </div>
            <div className="ChatQuote__extra">{messageImages}</div>
            <p className="ChatQuote__timestamp">{date.toLocaleString()}</p>
        </div>
    );
}
