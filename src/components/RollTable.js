import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {displayRollBreakdown} from '../diceLogic/displayRollBreakdown';

class RollTable extends Component {
	renderRolls() {
		if(!this.props.rolls) {
			return [];
		}

		return this.props.rolls.map((roll, index) => {
			const breakdown = displayRollBreakdown(roll);
			const band = (index % 2 !== this.props.rolls.length % 2) ? 'roll-table-dark-band' : 'roll-table-light-band';
			const rollRowClass = `roll-row ${band}`;
			return (
				<tr key={index} className={rollRowClass} onClick={() => this.props.modifyInput(roll.original)}>
					<td className="roll-table-roll-data">{breakdown}</td>
					<td className="roll-table-roll-evaluated">{roll.rollData.evaluated}</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<table style={{width: '100%', borderCollapse: 'collapse', border: '3px solid #333'}}>
				<tbody style={{width: '100%'}} className="roll-table">
					{this.renderRolls()}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps(state) {
	return {rolls: state.rolls};
}

export default connect(mapStateToProps, actions)(RollTable);