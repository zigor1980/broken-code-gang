import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import { HeaderCenterItems } from '../HeaderCenterItems/HeaderCenterItems';
import { Button } from '../Button/Button';
import { routeNavigation } from '../../actions/route';
import { ConnectedUserPage } from '../UserPage/UserPage';

const stateToProps = state => ({
    payload: state.route.payload,
    page: state.route.page,
});

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: false,
            info: false,
        };
        this.openInfo = this.openInfo.bind(this);
    }

    goBack() {
        const { payload } = this.props;
        if (!(!payload || !payload.prevPage || payload.prevPage === 'authorization')) {
            const { prevPage } = this.props.payload;
            this.props.dispatch(routeNavigation({
                page: prevPage,
                payload: {
                    ...this.props.payload,
                    prevPage: this.props.payload.prevPrevPage ? this.props.payload.prevPrevPage : '',
                    prevPrevPage: this.props.payload.prevPrevPrevPage ? this.props.payload.prevPrevPrevPage : '',
                },
            }));
        }
    }

    startSearch() {
        this.setState({
            search: true,
        });
    }

    openChatSettings() {
        this.props.openChatSettings();
    }

    handleSearch(event) {
        this.props.handleSearch(event);
    }

    resetSearch(event) {
        this.props.resetSearch(event);
    }

    cancelSearch() {
        this.setState({
            search: false,
        });
    }

    openInfo() {
        this.setState({
            info: !this.state.info,
        });
    }

    render() {
        const {
            buttonBack,
            buttonSearch,
            buttonSettings,
            buttonAdd,
            buttonInfo,
            contentType,
        } = this.props;
        const btnFillerStyle = { width: '30px', height: '30px' };
        const btnFiller = <div style={btnFillerStyle}>&nbsp;</div>;
        let leftControl = btnFiller;
        if (buttonBack) {
            leftControl = (
                <Button
                    type="back"
                    modifier="es"
                    circle
                    onClick={this.goBack.bind(this)}
                />);
        } else if (buttonInfo) {
            leftControl = (
                <Button
                    type="info"
                    modifier="es"
                    circle
                    onClick={this.openInfo}
                />);
        }
        let rightControl = btnFiller;
        if (buttonSearch) {
            rightControl = (
                <Button
                    type="search"
                    modifier="s"
                    circle
                    onClick={this.startSearch.bind(this)}
                />);
        } else if (buttonSettings) {
            rightControl = <Button type="settings" modifier="s" circle onClick={this.openChatSettings.bind(this)} />;
        } else if (buttonAdd) {
            rightControl = (
                <button className="Button_Add" onClick={buttonAdd} />
            );
        }
        let contentTitle = '';
        let contentDesc = '';
        let anotation = '';
        let type = '';
        switch (contentType) {
        case 'chats':
            contentTitle = 'BCM';
            type = 'caption';
            break;
        case 'add-room':
            anotation = 'Enter room name...';
            type = 'input';
            break;
        case 'contacts':
            contentTitle = 'Contacts';
            type = 'caption';
            break;
        case 'add-user':
            contentTitle = 'Select contact';
            type = 'caption';
            break;
        case 'settings':
            contentTitle = 'Settings';
            type = 'caption';
            break;
        case 'chat':
            contentTitle = this.props.contentTitle || 'Chat';
            contentDesc = this.props.contentDesc || '';
            type = 'chat';
            break;
        default:
            contentTitle = 'BCM';
            type = 'caption';
            break;
        }

        let headerContent = '';
        if (this.state.search || this.props.searchIsOn) {
            headerContent = (
                <div className="Header__search_wrapper">
                    <Button type="back" modifier="es" onClick={this.cancelSearch.bind(this)} />
                    <input
                        type="text"
                        className="Header__search_input"
                        onChange={this.handleSearch.bind(this)}
                        value={this.props.searchIsOn}
                    />
                    <Button type="delete" active modifier="s" circle onClick={this.resetSearch.bind(this)} />
                </div>);
        } else {
            headerContent = (
                <HeaderCenterItems
                    title={contentTitle}
                    desc={contentDesc}
                    type={type}
                    anotation={anotation}
                />
            );
        }

        return (
            <header className="Header">
                {this.state.info && <ConnectedUserPage visible={this.openInfo} />}
                {leftControl}
                {headerContent}
                {rightControl}
            </header>
        );
    }
}

export const ConnectedHeader = connect(stateToProps)(Header);
