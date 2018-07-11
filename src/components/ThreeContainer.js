import React, {Component} from 'react';
import threeEntryPoint from '../threejs/threeEntryPoint';

export default class ThreeContainer extends Component {
    componentDidMount() {
        const {shape, color, ambientColor, strongLightColor, weakLightColor, color2=null} = this.props;
        threeEntryPoint(this.threeRootElement, shape, color, ambientColor, strongLightColor, weakLightColor, color2);
    }

    render() {
        return (
            <div ref={(element) => {this.threeRootElement = element;}}></div>
        );
    }
}