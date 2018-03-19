import React, { Component } from 'react';

export class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messageText:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({messageText: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <footer className='Footer'>
                <textarea className='Footer__TextArea'
                onChange={this.handleChange} rows='1'>
                    {this.state.messageText}
                </textarea>
                <input type="submit" value={this.props.submitIcon} onClick={this.handleSubmit} />
            </footer>
        );
    }

}
