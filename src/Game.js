import React from 'react';
// import './Game.css';
import ButtsBar from "./ButtsBar";
import Tips from './Tips';
import Question from './Question';
import Answer from './Answer';

export default class Game extends React.Component {
    render() {
        return (
            <div className="Game" >
                <Question
                    question={this.props.question}
                    index={this.props.index}
                />
                <Answer 
                question = {this.props.question} 
                onQuestionAnswer = {this.props.onQuestionAnswer}
                />
                <Tips tipsList={this.props.tipsList} />
                <ButtsBar
                    index = {this.props.index}
                    extreme={this.props.extreme}
                    finished={this.props.finished}
                    onButtonPressed={this.props.onButtonPressed}
                />
            </div>
        );
    }
}