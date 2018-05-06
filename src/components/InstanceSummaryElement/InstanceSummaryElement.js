import React, { Component } from 'react';
import Avatar from '../Avatar/Avatar';
import './InstanceSummaryElement.css';

export class InstanceSummaryElement extends Component {

    render() {
        if (!this.props) {
            return null;
        }

        const { summary } = this.props;
        const {
            title, description, author, descModifiers,timestamp
        } = summary;

        let titleClasses = 'InstanceSummaryElement__title';
        let descClasses = 'InstanceSummaryElement__desc';

        if (descModifiers && descModifiers === 'light') {
            titleClasses += ' InstanceSummaryElement__title_light';
            descClasses += ' InstanceSummaryElement__desc_light';
        } else {
            descClasses += ' InstanceSummaryElement__desc_dark';
        }

        let avatar = <Avatar caption={title} modifier={'m'}/>

        let descView = '';
        if (author) {
            descView = (<p className={descClasses}>
                <span className="InstanceSummaryElement__author">{`${author}`}</span>
                {description}
            </p>);
        } else {
            descView = (<p className={descClasses}>
                {description}
            </p>);
        }

        let timestampView='';
        if(timestamp){
            timestampView = <p className="InstanceSummaryElement__info_timestamp">{timestamp}</p>;
        }

        return (
            <div className="InstanceSummaryElement" onClick={this.props.handle}>
                {avatar}
                <div className="InstanceSummaryElement__info">
                    <div className="InstanceSummaryElement__info_header">
                        <h3 className={titleClasses}>{title}</h3>
                        {timestampView}
                    </div>
                    {descView}
                </div>
            </div>
        );
    }
}
