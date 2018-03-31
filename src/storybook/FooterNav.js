import React from "react";
import { storiesOf } from "@storybook/react";
import { FooterNav } from "../components/FooterNav/FooterNav";

storiesOf("FooterNav", module)
    .add("Chats page", () => <FooterNav active="chat" />)
    .add("Contacts page", () => <FooterNav active="user" />)
    .add("Settings page", () => <FooterNav active="settings" />);
