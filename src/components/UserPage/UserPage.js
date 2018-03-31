import React, { Component } from "react";

import "./UserPage.css";

import { Header } from "../Header/Header";
import { Avatar } from "../Avatar/Avatar";

export function UserPage(props) {
    let userInfo;

    if (!props.userInfo) {
        userInfo =
            {
                userLogin: "UserLogin",
                userAvatar: {
                    src: "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                    modifier: "avatar-s",
                },
            };
    } else {
        userInfo = props.userInfo;
    }

    const { userLogin, userAvatar } = userInfo;

    return (
        <div className="UserPage">
            <Header />
        <div className="UserPage__UserInfo">
                <Avatar image={userAvatar} />
            <h1 className="UserPage__UserName">
                    {userLogin}
                </h1>
          </div>
            <div className="UserPage__UserControls">
                <button key="StarChar">
                    Начать чат
              </button>
                <button key="BlockUser">
                    Заблокировать пользователя
              </button>
          </div>
      </div>
    );
}
