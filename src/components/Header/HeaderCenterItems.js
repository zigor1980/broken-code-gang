import React from 'react';
import ReactDOM from 'react-dom';

export default class HeaderCenterItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			groupName: this.props.groupName,
			participants: this.props.participants,
		}
	}

	render(){
		return (
			<div>
			 	<img src='http://localhost:3000/static/media/logo.5d5d9eef.svg' style = {{width: '85px'}} />
			 	<div>
			 		<h2 >{this.state.groupName}</h2>
			 		<p>{this.state.participants}</p>
			 	</div>
			</div>
			 );
	}
}
