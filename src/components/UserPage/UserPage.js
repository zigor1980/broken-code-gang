import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from '../Avatar/Avatar';
import { routeNavigation } from '../../actions/route';
import { Button } from '../Button/Button';
import api from '../../api';

import './UserPage.css';

const stateToProps = state => ({
    payload: state.route.payload,
    curUserInfo: state.user.curUserInfo,
});

export class UserPage extends Component {
    constructor(props) {
        super(props);
        this.exitHandle = this.exitHandle.bind(this);
    }

    exitHandle() {
        this.props.dispatch(routeNavigation({ page: 'authorization' }));
        api.logoutCurrentUser().then(async () => {
            this.props.dispatch({ type: 'USER_SIGN_OUT' });
            this.props.dispatch({ type: 'ROOMS_RESET' });
        });
    }
    render() {
        let nameUser,
            phoneUser = '',
            avatar,
            mailUser = '';
        if (this.props.curUserInfo) {
            const { name, phone, email } = this.props.curUserInfo;
            nameUser = name;
            phoneUser = phone;
            mailUser = email;
            avatar = <Avatar caption={nameUser} modifier="l" />;
        }

        return (
            <div
                className="UserPage"
                onClick={this.props.visible}
            >
                <div className="UserPage__Container" onClick={e => (e.stopPropagation())} >
                    <Button
                        type="back"
                        modifier="s"
                        circle
                        onClick={this.props.visible}
                    />
                    <div className="UserPage__UserInfo">
                        {avatar}
                        <h1 className="UserPage__UserName">
                            {nameUser}
                        </h1>
                        <h4 className="UserPage__UserPhone">
                            {phoneUser}
                        </h4>
                        <h4 className="UserPage__UserPhone">
                            {mailUser}
                        </h4>
                    </div>
                    <div className="UserPage__UserControls">
                        <button key="Exit" onClick={this.exitHandle}>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export const ConnectedUserPage = connect(stateToProps)(UserPage);
