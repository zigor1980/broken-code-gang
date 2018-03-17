import React, {Component} from 'react';
import './Avatar.css'

export class Avatar extends Component{
    render() {
        const imgSrc = this.props.image.src;
        const imgModifier = this.props.image.modifier;
        return (
            <img className={`${imgModifier ? "avatar "+imgModifier : "avatar"}`} src={imgSrc} />
        )
    }
}