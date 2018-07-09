import React, { Component } from 'react';
import QuickRoll from './QuickRoll';
import RollInput from './RollInput';

class App extends Component {
    render() {
        return (
            <div className="App">
                <QuickRoll />
                <RollInput />
            </div>
        );
    }
}

export default App;
