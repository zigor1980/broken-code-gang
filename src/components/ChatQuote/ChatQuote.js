import React from "react";
import "./ChatQuote.css";

export function ChatQuote(props) {
    const { message: text, created_at: date, userId: authorId } = props.message,
        userId = props.userId;
    let angleDirection = "ChatQuote__angle_right",
        chatDirection = "ChatQuote_right",
        user = "";

    if (userId !== authorId) {
        angleDirection = "ChatQuote__angle_left";
        chatDirection = "ChatQuote_left";
        user = <p className="ChatQuote__user">{authorId}</p>;
    }

    return (
      <div className={`ChatQuote ${chatDirection}`}>
            <div className={angleDirection} />
          {user}
          <p className="ChatQuote__text">{text}</p>
          <p className="ChatQuote__timestamp">{date}</p>
        </div>
    );
}
