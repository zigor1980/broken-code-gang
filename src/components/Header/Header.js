import React from 'react';
import { connect } from 'react-redux';
import './Header.css';
import { HeaderCenterItems } from '../HeaderCenterItems/HeaderCenterItems';
import { addChat, resetChats } from '../../actions/chatAction';


const stateToProps = (state) => {
  console.log(state);
  return {
    chats: state.chats,
    // stateChats: state.stateChats
  }
};

const Header = connect(stateToProps)((props) => {
    return (
      <header className="Header">
          <button className="Header__button">{props.buttonExit && 'Назад' }</button>
          <HeaderCenterItems groupName="Telegram" participants="0 участников" />
          <button className="Header__button">{props.buttonHeaderRight && 'Свойства/поиск' }</button>
        </header>
    );
});

export default Header;
