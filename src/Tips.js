import React from 'react';

export default class Tips extends React.Component {
    render() {
        return (
            <div className="Tips" id = "style-2">
                <p>Tips</p>
                {this.props.tipsList.length > 0 ? (
                    <ul>{this.props.tipsList || ""}</ul>
                ) : (
                        <p>There are no available tips for this question</p>
                    )}
            </div>
        );
    }
}