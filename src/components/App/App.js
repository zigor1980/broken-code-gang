import React, { Component } from 'react';
import { Avatar } from '../Avatar/Avatar';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header.js';
import { ChatPage } from '../ChatPage/ChatPage';

class App extends Component {
    render() {
        return (
            <ChatPage />
        );
    }
}

export default App;
