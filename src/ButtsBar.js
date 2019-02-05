import React from 'react';

export default class ButtsBar extends React.Component {
    render() {
        return (
            <div>
                <button className = "MyButt" onClick = {() => this.props.onButtonPressed('previousBut')} disabled =  {this.props.index === 0}>Previous</button>
                <button className = "MyButt" onClick = {() => this.props.onButtonPressed('submitBut')} disabled =  {this.props.finished}>Submit</button>
                <button className = "MyButt" onClick = {() => this.props.onButtonPressed('nextBut')} disabled =  {this.props.index === this.props.extreme}>Next</button>
                <button className = "MyButt" onClick = {() => this.props.onButtonPressed('resetBut')}>Reset</button>
            </div>
        );
    }
}