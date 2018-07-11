import React, {Component} from 'react';
import DieButton from './DieButton';
import Cube from '../threejs/Cube';
import Dodecahedron from '../threejs/Dodecahedron';
import DoublePentagonalTrapezohedron from '../threejs/DoublePentagonalTrapezohedron';
import Icosahedron from '../threejs/Icosahedron';
import Octahedron from '../threejs/Octahedron';
import PentagonalTrapezohedron from '../threejs/PentagonalTrapezohedron';
import Tetrahedron from '../threejs/Tetrahedron';
import * as Colors from '../threejs/Colors'

class QuickRoll extends Component {
    constructor(props) {
        super(props);
        this.state = {forceResize: 0};
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.forceUpdate())
    }

    render() {
        return (
            <div className="qr" style={{display: 'flex'}}>
                <DieButton sides={4} shape={Tetrahedron} color={Colors.PINK} ambientColor={'white'} strongLightColor={Colors.LIGHT_ORANGE} weakLightColor={Colors.YELLOW}/>
                <DieButton sides={6} shape={Cube} color={Colors.ORANGE} ambientColor={'white'} strongLightColor={Colors.YELLOW} weakLightColor={Colors.GREEN} />
                <DieButton sides={8} shape={Octahedron} color={Colors.YELLOW} ambientColor={'white'} strongLightColor={Colors.GREEN} weakLightColor={Colors.TEAL} />
                <DieButton sides={10} shape={PentagonalTrapezohedron} color={Colors.GREEN} ambientColor={'white'} strongLightColor={Colors.YELLOW} weakLightColor={Colors.YELLOW} />
                <DieButton sides={12} shape={Dodecahedron} color={Colors.TURQUOISE} ambientColor={'white'} strongLightColor={Colors.BLUE} weakLightColor={Colors.PURPLE} />
                <DieButton sides={20} shape={Icosahedron} color={Colors.BLUE} ambientColor={Colors.PURPLE} strongLightColor={Colors.PURPLE} weakLightColor={Colors.RED} />
                <DieButton sides={'%'} shape={DoublePentagonalTrapezohedron} color={Colors.PURPLE} color2={Colors.RED} ambientColor={Colors.RED} strongLightColor={Colors.RED} weakLightColor={Colors.LIGHT_ORANGE} />
            </div>
        );
    }
}

export default QuickRoll;