import React from 'react';
import icon from './assets/download.png';

export default class Result extends React.Component {
    render() {
        return (
            <div>
                <nav className="Nav">
                    <img src={icon} style={{ width: '25px', height: '25px', position: 'relative', top: '5px', margin: '0 10px 0 5px' }}></img>
                    QUIZ game
                </nav>
            </div>
        );
    }
}