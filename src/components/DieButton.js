import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import ThreeContainer from './ThreeContainer';
import parseRollNotation from '../diceLogic/parseRollNotation';
import {interpretRoll} from '../diceLogic/interpretRoll';

class DieButton extends Component {
    constructor(props) {
        super(props);
        this.state = {width: window.innerWidth/7, height: window.innerWidth/7};
    }

    componentDidMount() {
        window.addEventListener('resize', (event) => {
            this.setState({width: event.target.innerWidth/7, height: event.target.innerWidth/7});
        });
	}
	
	triggerRoll = () => {
		const sides = this.props.sides === '%' ? 100 : this.props.sides;
		const notation = `1d${sides}`
		const parsed = parseRollNotation(notation);
		const rolled = interpretRoll(parsed);
		this.props.addRoll({rollData: rolled, original: notation})
	}

    render() {
        return (
			<a style={{width: this.state.width, height: this.state.height}} 
				className="die-button"
				onClick={this.triggerRoll}
			>
				<div>
                	<ThreeContainer {...this.props} />
                	<label className="die-button-label">d{this.props.sides}</label>
            	</div>
			</a>
        );
    }
}

export default connect(null, actions)(DieButton);