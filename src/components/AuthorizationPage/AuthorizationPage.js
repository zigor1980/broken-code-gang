import React from 'react';
import './AuthorizationPage.css';
import {connect} from 'react-redux'

import {routeNavigation} from '../../actions/route';

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
            this.setState({
                active: button.target.name,
            });
        }

        submitHandler() {
            this.props.dispatch(routeNavigation({
                page: 'chat_list',
                payload: {
                    footerNav: {
                        active: 'chat'
                    }
                }
            }));
        }

        render() {
            const swapButton = 'Sign up' === this.state.active ? 'Sign in' : 'Sign up';
            return (
                <div className="AuthorizationPage">
                    <img className="AuthorizationPage__Image" src={require('../../assets/icons/logo.png')} alt="logo"/>
                    <input className="AuthorizationPage__Input" type="text" name="login" placeholder="Login" required/>
                    <input className="AuthorizationPage__Input" type="password" name="password" placeholder="Password"
                           required/>
                    <button className="AuthorizationPage__submit"
                            onClick={this.submitHandler}>{this.state.active}</button>
                    <div className="AuthorizationPage__Select">
                        <button onClick={this.onclick} name={swapButton} key={swapButton}
                                className='AuthorizationPage__Select__button'>{swapButton}</button>
                    </div>
                </div>
            );
        }
    }
);
