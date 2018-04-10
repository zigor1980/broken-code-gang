import React from 'react';
import './AuthorizationPage.css';
import {connect} from 'react-redux'

import {routeNavigation} from '../../actions/route';
import api from '../../api';
import signInUser from '../../actions/signInUser';
import Message from '../Message/Message';

const updateInputField = (inputsState, input, field, value) => {
    return {
        ...inputsState,
        [input]: {
            ...inputsState[input],
            [field]: value
        }
    }
};

const inputsInitial = {
    login: {
        value: '',
        error: false
    },
    password: {
        value: '',
        error: false
    },
};

export const AuthorizationPage = connect()(
    class AuthorizationPage extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                active: 'Sign in',
                inputs: inputsInitial,
                message: ''
            };
            this.onclick = this.onclick.bind(this);
            this.submitHandler = this.submitHandler.bind(this);
            this.fieldChangedHandler = this.fieldChangedHandler.bind(this);
        }

        onclick(button) {
            this.setState({
                active: button.target.name,
                message: ''
            });
        }

        submitHandler() {
            const { login: { value: login }, password: { value: password} } = this.state.inputs;

            let inputs = this.state.inputs;

            if (login === '') {
                inputs = updateInputField(inputs, 'login', 'error', true);
            }

            if (password === '') {
                inputs = updateInputField(inputs, 'password', 'error', true);
            }

            if (login === '' || password === '') {
                this.setState({inputs});
                return;
            }

            if (this.state.active === 'Sign up') {
                this.singUp(login, password);
            }

            if (this.state.active === 'Sign in') {
                this.singIn(login, password);
            }
        }

        fieldChangedHandler(e) {
            this.setState({
                    inputs: updateInputField(this.state.inputs, e.target.name, 'value', e.target.value),
                    message: ''
                })
        }

        async singUp(login, password) {
            try{
                const user = await api.getUserByLogin(login);

                if (user) {
                    this.setState({message: 'Такой логин уже занят.'});
                    return;
                }
    
                await api.addUser(login, password);
    
                this.setState({
                    active: 'Sign in',
                    inputs: inputsInitial
                });
            } catch(error) {
                console.log(error);
            }
        }

        async singIn(login, password) {
            const user = await this.props.dispatch(signInUser(login, password));

            if (!user) {
                this.setState({message: 'Пользователя с таким логином и паролем не найдено.'});
                return;
            }

            if (user) {
                this.props.dispatch(routeNavigation({
                    page: 'chat_list',
                    payload: {
                        footerNav: {
                            active: 'chat'
                        }
                    }
                }));
            }
        }

        render() {
            const swapButton = 'Sign up' === this.state.active ? 'Sign in' : 'Sign up';

            const { login: { value: login }, password: { value: password }, login: { error: loginError }, password: { error: passwordError } } = this.state.inputs;
            return (
                <div className="AuthorizationPage">

                    {this.state.message && <Message text={this.state.message} />}

                    <img className="AuthorizationPage__Image" src={require('../../assets/icons/logo.png')} alt="logo"/>
                    <input value={login} className="AuthorizationPage__Input" style={{animationName: loginError ? 'input-error' : ''}} onChange={this.fieldChangedHandler} onAnimationEnd={() => {this.setState({inputs: updateInputField(this.state.inputs, 'login', 'error', false)})}} type="email" name="login" placeholder="Email" required/>
                    <input value={password} className="AuthorizationPage__Input" style={{animationName: passwordError ? 'input-error' : ''}} onChange={this.fieldChangedHandler} onAnimationEnd={() => {this.setState({inputs: updateInputField(this.state.inputs, 'password', 'error', false)})}} type="password" name="password" placeholder="Password"
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
