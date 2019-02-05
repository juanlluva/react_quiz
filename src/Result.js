import React from 'react';

export default class Result extends React.Component {
    render() {
        return (
            <div className = "Result">
                <h1>End of the game!</h1>
                <h2>Your final score is</h2>
                <div className = "ScoreDiv"><span className = "Score">{this.props.score}</span></div>
                <button className= "MyButt" onClick = {() => this.props.onButtonPressed('resetBut')}>Restart Game</button>
            </div>
        );

    }
}