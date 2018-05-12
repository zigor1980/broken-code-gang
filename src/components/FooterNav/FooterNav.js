import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '../Button/Button';
import { routeNavigation } from '../../actions/route';
import './FooterNav.css';

export const FooterNav = connect()(class FooterNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: this.props.active,
        };

        this.changeNavHandler = this.changeNavHandler.bind(this);
    }

    changeNavHandler(type) {
        this.setState({ active: type });

        let page = type;

        if (page === 'dialogs') {
            page = 'chat_list';
        } else if (page === 'users') {
            page = 'contacts_list';
        }

        this.props.dispatch(routeNavigation({
            page,
            payload: {
                footerNav: {
                    active: type,
                },
            },
        }));
    }

    render() {
        return (
            <footer className="Footer Footer__nav">
                <Button
                    type="dialogs"
                    onClick={this.changeNavHandler}
                    active={this.state.active === 'dialogs'}
                    className="Footer__nav_btn"
                />
                <Button
                    type="users"
                    onClick={this.changeNavHandler}
                    active={this.state.active === 'user'}
                    className="Footer__nav_btn"
                />
            </footer>
        );
    }
});
