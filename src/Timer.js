import React from 'react';

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: null,
            counter: 60
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({ timer });
    }

    tick() {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            })
        } else {
            clearInterval(this.state.timer);
            this.props.onButtonPressed('submitBut')
        }
    }
    render() {
        return (
            <div className="Timer">
                <div className= "time">
                    <span className="text">{Math.floor((this.state.counter / 60) % 60)} min : </span>
                    <span className="text">{Math.floor(this.state.counter % 60)} sec</span>
                </div>
            </div>
        );
    }
}
