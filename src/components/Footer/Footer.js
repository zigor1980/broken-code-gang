import React, { Component } from 'react';
import { connect } from 'react-redux';
import sendMessage from '../../actions/sendMessage';
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

    handleSubmit = () => {
        const roomId = "5aacdce7744a767e04c94e17";
        const currentMessage = this.state.messageText;
        this.setState({
            messageText: '',
        });
        this.props.dispatch(sendMessage(roomId, currentMessage));
    };

    render() {
        return (
          <footer className="Footer">
              <textarea
                    className="Footer__TextArea"
                    onChange={this.handleChange}
                    rows="1"
                    value={this.state.messageText}
                >
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
