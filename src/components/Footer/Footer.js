import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Footer.css';

const stateToProps = state => ({
});


export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageText: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ messageText: e.target.value });
    }

    handleSubmit() {
        const currentMessage = {
            id: 176,
            userId: 'bibushik',
            message: this.state.messageText,
            created_at: new Date().toDateString(),
        };
        this.props.dispatch({
            type: 'ADD_MESSAGE',
            message: currentMessage,
        });
    }

    render() {
        return (
          <footer className="Footer">
              <textarea
                    className="Footer__TextArea"
                    onChange={this.handleChange}
                    rows="1"
                >
                    {this.state.messageText}
                </textarea>
              <input
                  className="Footer__Input" type="submit" value={this.props.submitIcon}
                  onClick={this.handleSubmit}
                />
            </footer>
        );
    }
}

export const ConnectedFooter = connect(stateToProps)(Footer);
