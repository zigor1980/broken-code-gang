import React from 'react';


export class Footer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            messageText:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({messageText: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render(){
        return (
            <footer className='Footer'>
                <form className='Footer__form'>
                    <input type="text" value={this.state.messageText} onChange={this.handleChange} />
                    <input type="submit" value={this.props.submitIcon} onClick={this.handleSubmit} />
                </form>
            </footer>
        );
    }

}