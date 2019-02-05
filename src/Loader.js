import React from 'react';
import loading from './assets/download.gif';

export default class Loader extends React.Component {
    render() {
        return (
            <div>
                <h2>Loading...</h2>
                <div><img src={loading}></img></div>
            </div>
        );
    }
}