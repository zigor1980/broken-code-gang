import React from 'react';
import './LinkBtn.css';

export function LinkBtn(props) {
    return (
      <button className={`LinkBtn ${(props.className) ? props.className : ''}`} onClick={props.onclick}>
          {props.btnText}
        </button>
    );
}
