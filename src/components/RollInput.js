import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import parseRollNotation from '../diceLogic/parseRollNotation';
import {interpretRoll} from '../diceLogic/interpretRoll';

class RollInput extends Component {

	componentDidMount() {
		document.querySelector('.roll-input').addEventListener('change', () => {
			document.querySelector('.roll-input').classList.remove('roll-input-validation-error')
		});
	}

	parseRoll = () => {
		const notation = this.props.inputValue;
		const cleansedNotation = notation.split('d%').join('d100');
		const parsed = parseRollNotation(cleansedNotation);

		if(parsed instanceof Error) {
			const fullError = parsed.toString();
			let cleanError = fullError.substr(fullError.lastIndexOf('Error: ') + 'Error: '.length);
			if(cleanError === "Invalid term ''.") {
				return;
			}
			document.querySelector('#roll-input-validation-label').innerHTML = '* ' + cleanError;
			document.querySelector('.roll-input-validation-label').style.display = 'block';
			document.querySelector('.roll-input').classList.add('roll-input-validation-error');
		}
		else if(!parsed) {
			return;
		}

		else {
			const rolled = interpretRoll(parsed);
			this.props.addRoll({original: notation, rollData: rolled});
			this.props.modifyInput('');
		}
	};

    render() {
        return (
			<div>
				<div className="roll-input-div">
					<span style={{width: '90%', display: 'inline-block'}}>
						<input
							id="roll-input"
							className="roll-input"
							placeholder="3d12 + 2d8 + 10"
							value={this.props.inputValue}
							onChange={this.onChangeInput}
						/>
					</span>
					<span style={{width: '10%', display: 'inline-block'}}>
						<button className="roll-input-button" onClick={this.parseRoll}>
							Roll
						</button>
					</span>
				</div>
				<div className="roll-input-validation-label">
					<label htmlFor="roll-input" id="roll-input-validation-label"></label>
				</div>
			</div>
        );
	}
	
	onChangeInput = (event) => {
		this.props.modifyInput(event.target.value);
		document.querySelector('.roll-input-validation-label').style.display = 'none';
		document.querySelector('.roll-input').classList.remove('roll-input-validation-error');
	}
}

function mapStateToProps(state) {
	return {
		inputValue: state.inputValue
	};
}

export default connect(mapStateToProps, actions)(RollInput);