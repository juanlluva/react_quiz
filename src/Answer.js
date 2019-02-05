import React from 'react';

export default class Answer extends React.Component {
    render() {
        return (
            <div className="Answer" >
                <input className = "Inputs" type="text" value={this.props.question.userAnswer || ""} onChange={(e) => {
                    this.props.onQuestionAnswer(e.target.value);
                }} />
            </div>
        );
    }
}