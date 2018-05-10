import React from 'react';

class Header extends React.Component {
    render() {
        return (
        <div className="header">
            <h1 className="display-4">{this.props.title}</h1>
            {this.props.subTitle && <p className="lead">{this.props.subTitle}</p>}
        </div>
        );
    }
};

export {Header as default};