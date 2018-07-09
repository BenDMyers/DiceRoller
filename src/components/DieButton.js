import React, {Component} from 'react';
import ThreeContainer from './ThreeContainer';

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
    render() {
        return (
            /*<td className="die-button">*/<a style={{width: this.state.width, height: this.state.height}} className="die-button" onClick={() => {console.log(this.props.sides)}}><div>
                <ThreeContainer {...this.props} />
                <label className="die-button-label">d{this.props.sides}</label>
            </div></a>/*</td>*/
        );
    }
}

export default DieButton;