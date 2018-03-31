import React, { Component } from 'react';
import './Avatar.css';

export function Avatar(props) {
    const imgSrc = props.image.src;
    const imgModifier = props.image.modifier;
    return (
      <img className={`${imgModifier ? `avatar ${imgModifier}` : 'avatar'}`} src={imgSrc} />
    );
}
