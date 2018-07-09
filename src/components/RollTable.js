import React, {Component} from 'react';
import {connect} from 'react-redux';

class RollTable extends Component {
	renderRolls() {
		if(!this.props.rolls) {
			return [];
		}

		return this.props.rolls.map((roll, index) => {
			const band = (index % 2 !== this.props.rolls.length % 2) ? 'roll-table-dark-band' : 'roll-table-light-band'
			return (
				<tr key={index} className={band}>
					<td className="roll-table-roll-data">{roll.original}</td>
					<td className="roll-table-roll-evaluated">{roll.rollData.evaluated}</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<table style={{width: '100%'}}>
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

export default connect(mapStateToProps)(RollTable);