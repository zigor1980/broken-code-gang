import React, { Component } from 'react';
import { Avatar } from '../Avatar/Avatar';
import './InstanceSummaryElement.css';

export function InstanceSummaryElement(props) {
    if (!props) {
        return null;
    }
    const avatar = props.summary.avatar;
    const title = props.summary.title;
    const description = props.summary.description;
    const author = props.summary.author;
    const descModifiers = props.summary.descModifiers;

    let titleClasses = 'InstanceSummaryElement__title';
    let descClasses = 'InstanceSummaryElement__desc';

    if (descModifiers && descModifiers === 'light') {
        titleClasses += ' InstanceSummaryElement__title_light';
        descClasses += ' InstanceSummaryElement__desc_light';
    } else {
        descClasses += ' InstanceSummaryElement__desc_dark';
    }

    let descView = '';
    if (author) {
        descView = (<p className={descClasses}>
          <span className="InstanceSummaryElement__author">{`${author}: `}</span>
          {description}
                    </p>);
    } else {
        descView = (<p className={descClasses}>
          {description}
                    </p>);
    }

    return (
      <div className="InstanceSummaryElement">
          <div className="InstanceSummaryElement__avatar">
              <Avatar image={avatar} />
            </div>
          <div className="InstanceSummaryElement__info">
              <h3 className={titleClasses}>{title}</h3>
              {descView}
            </div>
        </div>
    );
}
