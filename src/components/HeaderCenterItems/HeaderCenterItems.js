import React from 'react';

export function HeaderCenterItems(props) {
    return (
      <div className="Header__content">
          <img src="http://localhost:3000/static/media/logo.5d5d9eef.svg" style={{ width: '85px' }} />
          <div className="Header__content__item">
              <h2 >{props.groupName}</h2>
              <p>{props.participants}</p>
            </div>
        </div>
    );
}
