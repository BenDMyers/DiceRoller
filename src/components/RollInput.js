import React, {Component} from 'react';
import parseRollNotation from '../diceLogic/parseRollNotation';
import {interpretRoll} from '../diceLogic/interpretRoll';

class RollInput extends Component {
	parseRoll = () => {
		const notation = document.querySelector('.roll-input').value;
		const cleansedNotation = notation.split('d%').join('d100');
		const parsed = parseRollNotation(cleansedNotation);

		if(!parsed) {
			return;
		}

		else {
			interpretRoll(parsed);
		}
	};

    render() {
        return (
            <div className="roll-input-div">
                <span style={{width: '90%', display: 'inline-block'}}><input className="roll-input" placeholder="3d12 + 2d8 + 10" /></span>
                <span style={{width: '10%', display: 'inline-block'}}><button className="roll-input-button" onClick={this.parseRoll}>Roll</button></span>
            </div>
        );
    }
}

export default RollInput;