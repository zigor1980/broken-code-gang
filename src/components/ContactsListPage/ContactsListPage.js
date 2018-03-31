import React from "react";
import { Header } from "../Header/Header";
import { UserList } from "../UserList/UserList";
import { FooterNav } from "../FooterNav/FooterNav";

import "./ContactsListPage.css";

export function ContactsListPage(props) {
    return (
        <div className="ContactsListPage">
            <Header buttonExit="true" buttonHeaderRight="true" />
            <UserList />
            <FooterNav active="user" />
      </div>
    );
}
