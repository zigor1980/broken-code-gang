import React from "react";
import { UserList } from "../UserList/UserList";
import { Button } from "../Button/Button";
import { LinkBtn } from "../Buttons/LinkBtn/LinkBtn";
import "./GroupChatSettings.css";

export function GroupChatSettings(props) {
    /**
     * Pass group chat members to UserList
     * props - group chat info
     */

    const membersQuan = 10;
    const groupName = "BCG";

    return (
        <div className="GroupChatSettings">
            <section className="GroupChatSettings__section">
            <h3 className="GroupChatSettings__title">{groupName}</h3>
            <div className="GroupChatSettings__add-wrapper">
                <Button type="add-user" active modifier="m" circle className="GroupChatSettings__add" />
              </div>
          </section>
            <section className="GroupChatSettings__section">
                <h4 className="GroupChatSettings__section__title">Members ({membersQuan})</h4>
                <UserList />
          </section>
            <section className="GroupChatSettings__section">
                <LinkBtn className="GroupChatSettings__exit" btnText="Exit" />
          </section>
      </div>
    );
}
