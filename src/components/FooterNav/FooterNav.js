import React from "react";
import { Button } from "../Button/Button";
import "./FooterNav.css";

export function FooterNav(props) {
    return (
        <footer className="Footer Footer__nav">
            <Button type="chat" active={props.active === "chat"} className="Footer__nav_btn" />
            <Button type="user" active={props.active === "user"} className="Footer__nav_btn" />
            <Button type="settings" active={props.active === "settings"} className="Footer__nav_btn" />
      </footer>
    );
}
