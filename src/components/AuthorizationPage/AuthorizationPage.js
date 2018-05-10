import React from 'react';
import { connect } from 'react-redux';
import './AuthorizationPage.css';
import api from '../../api';
import Message from '../Message/Message';
import { routeNavigation } from '../../actions/route';
import signInUser from '../../actions/signInUser';

const updateInputField = (inputsState, input, field, value) => ({
    ...inputsState,
    [input]: {
        ...inputsState[input],
        [field]: value,
    },
});

const inputsInitial = {
    login: {
        value: '',
        error: false,
    },
    password: {
        value: '',
        error: false,
    },
    name: {
        value: '',
        error: false,
    },
};

export const AuthorizationPage = connect()(class AuthorizationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'Sign in',
            inputs: inputsInitial,
            message: '',
        };
        this.onclick = this.onclick.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.fieldChangedHandler = this.fieldChangedHandler.bind(this);
        this.enterChat = this.enterChat.bind(this);
    }

    onclick(button) {
        this.setState({
            active: button.target.name,
            message: '',
        });
    }

    submitHandler() {
        const { login: { value: login }, password: { value: password }, name: { value: name } } = this.state.inputs;

        let { inputs } = this.state;
        let fieldError;

        if (login === '') {
            inputs = updateInputField(inputs, 'login', 'error', true);
        }

        if (password === '') {
            inputs = updateInputField(inputs, 'password', 'error', true);
        }

        fieldError = login === '' || password === '';

        if (this.state.active === 'Sign up') {
            if (name === '') {
                inputs = updateInputField(inputs, 'name', 'error', true);
            }

            fieldError = fieldError || name === '';
        }

        if (fieldError) {
            this.setState({ inputs });
            return;
        }

        if (this.state.active === 'Sign up') {
            this.singUp(login, password, name)
                .then(() => {
                });
        }

        if (this.state.active === 'Sign in') {
            this.singIn(login, password)
                .then(() => {});
        }
    }

    fieldChangedHandler(e) {
        this.setState({
            inputs: updateInputField(this.state.inputs, e.currentTarget.name, 'value', e.target.value),
            message: '',
        });
    }

    enterChat(user) {
        this.props.dispatch(signInUser(user));
        this.props.dispatch(routeNavigation({
            page: 'chat_list',
            payload: {
                footerNav: {
                    active: 'chat',
                },
            },
        }));
    }

    async singUp(login, password, name) {
        try {
            const user = await api.getUserByLogin(login);

            if (user) {
                this.setState({ message: 'Такой логин уже занят.' });
                return;
            }
            const newUser = await api.addUser(login, password, name);
            this.enterChat(newUser);
        } catch (error) {
            this.setState({ message: error.message });
        }
    }

    async singIn(login, password) {
        const user = await api.getUserByLogin(login, password);
        if (user) {
            this.enterChat(user);
        } else {
            this.setState({ message: 'Неверный логин или пароль' });
        }
    }

    render() {
        const swapButton = this.state.active === 'Sign up' ? 'Sign in' : 'Sign up';
        const img = (
            <img
                className="AuthorizationPage__Image"
                src={require('../../assets/icons/logo.png')}
                alt="logo"
            />
        );
        const {
            login: { value: login, error: loginError },
            password: { value: password, error: passwordError },
            name: { value: name, error: nameError },
        } = this.state.inputs;
        return (
            <div className="AuthorizationPage">

                {this.state.message && <Message text={this.state.message} />}

                <div className="logo">
                    <span className="name">BCM</span>
                </div>
                <div className="Auth_Container">
                    <input
                        value={login}
                        className="AuthorizationPage__Input"
                        style={{ animationName: loginError ? 'input-error' : '' }}
                        onChange={this.fieldChangedHandler}
                        onAnimationEnd={() => {
                            this.setState({
                                inputs: updateInputField(
                                    this.state.inputs,
                                    'login',
                                    'error',
                                    false,
                                ),
                            });
                        }}
                        type="email"
                        name="login"
                        placeholder="Email"
                        required
                    />
                    {swapButton === 'Sign in' &&
                    <input
                        value={name}
                        className="AuthorizationPage__Input"
                        style={{ animationName: nameError ? 'input-error' : '' }}
                        onChange={this.fieldChangedHandler}
                        onAnimationEnd={() => {
                            this.setState({
                                inputs: updateInputField(
                                    this.state.inputs,
                                    'name',
                                    'error',
                                    false,
                                ),
                            });
                        }}
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />}
                    <input
                        value={password}
                        className="AuthorizationPage__Input"
                        style={{ animationName: passwordError ? 'input-error' : '' }}
                        onChange={this.fieldChangedHandler}
                        onAnimationEnd={() => {
                            this.setState({
                                inputs: updateInputField(
                                    this.state.inputs,
                                    'password',
                                    'error',
                                    false,
                                ),
                            });
                        }}
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <button
                        className="AuthorizationPage__submit"
                        onClick={this.submitHandler}
                    >{this.state.active}
                    </button>
                </div>
                <div className="AuthorizationPage__Select">
                    <button
                        onClick={this.onclick}
                        name={swapButton}
                        key={swapButton}
                        className="AuthorizationPage__Select__button"
                    >{swapButton}
                    </button>
                </div>
            </div>
        );
    }
});
