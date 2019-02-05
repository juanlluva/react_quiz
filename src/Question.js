import React from 'react';

export default class Question extends React.Component {
    render() {
        return (
            <div className="Question" >
                <h2 className="QuestionNumber"> Question {this.props.index + 1} </h2>
                <div className = "Container">
                <img className="Image" src={this.props.question.attachment.url}></img></div>
                <div className="Question">{this.props.question.question}</div>
            </div>
        );
    }
}