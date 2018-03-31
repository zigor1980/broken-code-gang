import React from 'react';
import './LinkBtn.css';

export function LinkBtn(props) {
    return (
      <button className={`LinkBtn ${(props.className) ? props.className : ''}`}>
          {props.btnText}
        </button>
    );
}
