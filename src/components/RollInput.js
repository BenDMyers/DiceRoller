import React, {Component} from 'react';

class RollInput extends Component {
    render() {
        return (
            <div className="roll-input-div">
                <span style={{width: '90%', display: 'inline-block'}}><input className="roll-input" placeholder="3d12 + 2d8 + 10" /></span>
                <span style={{width: '10%', display: 'inline-block'}}><button className="roll-input-button">Roll</button></span>
            </div>
        );
    }
}

export default RollInput;