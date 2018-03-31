import React from 'react';
import './AuthorizationPage.css';
import { connect } from 'react-redux'

import { routeNavigation } from '../../actions/route';

export const AuthorizationPage = connect()(
    class AuthorizationPage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                active: 'Sign in',
            };
            this.onclick = this.onclick.bind(this);
            this.submitHandler = this.submitHandler.bind(this);
        }

        onclick(button) {
            if (button.target.name !== this.state.active) {
                this.setState({
                    active: button.target.name,
                });
            }
        }

        submitHandler() {
            this.props.dispatch(routeNavigation({
                page: 'chat_list',
            }));
        }

        render() {
            const buttons = ['Sign in', 'Sign up'];
            return (
            <div className="AuthorizationPage">
                <div className="AuthorizationPage__Select">
                {buttons.map((button) => {
                            const activeButton = this.state.active === button ? 'AuthorizationPage__Select__button_active' : '';
                            return <button onClick={this.onclick} name={button} key={button} className={`AuthorizationPage__Select__button ${activeButton}`}>{button}</button>;
                        })}
                    </div>
                <img className="AuthorizationPage__Image" src={require('../../assets/icons/logo.png')} alt="logo" />
                <input className="AuthorizationPage__Input" type="text" name="login" placeholder="Login" required />
                <input className="AuthorizationPage__Input" type="password" name="password" placeholder="Password" required />
                <button className="AuthorizationPage__submit" onClick={this.submitHandler}>{this.state.active}</button>
                </div>
            );
        }
    }
)
