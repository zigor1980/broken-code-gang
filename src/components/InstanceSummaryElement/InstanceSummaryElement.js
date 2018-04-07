import React, { Component } from 'react';
import { Avatar } from '../Avatar/Avatar';
import './InstanceSummaryElement.css';

export class InstanceSummaryElement extends Component {

    handleClick = () => {
        this.props.onclick(this.props.summary.id);
    }

    render() {
        if (!this.props) {
            return null;
        }

        const { summary } = this.props;
        const {
            avatar, title, description, author, descModifiers,
        } = summary;

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
            <div className="InstanceSummaryElement" onClick={this.handleClick}>
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
}

