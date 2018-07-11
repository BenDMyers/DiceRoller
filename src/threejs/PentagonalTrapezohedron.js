import * as THREE from 'three';
import {DiceManager, DiceD10} from 'threejs-dice';
import CANNON from 'cannon';

// window.THREE = THREE;
// window.CANNON = CANNON;

export default (scene, radius, materialColor, opacity) => {
    const group = new THREE.Group();

    // console.log('threejs-dice', DiceD10.getGeometry);
    const world = new CANNON.World();
    DiceManager.setWorld(world);
    const d10Model = new DiceD10({size: radius});
    d10Model.chamfer = 1;
    const geometry = d10Model.getGeometry();
    const material = new THREE.MeshLambertMaterial({
        color: materialColor,
        side: THREE.DoubleSide,
        opacity,
        transparent: true
    });
    const mesh = new THREE.Mesh(geometry, material);

    const wireframe = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry),
        new THREE.LineBasicMaterial()
    );

    group.add(mesh);
    group.add(wireframe);

    scene.add(group);

    const speed = 1;

    function update(time) {
        const angle = time*speed;
        group.rotation.z = -angle;
        group.rotation.x = angle;
        // group.rotation.z = -45;
    }

    return {update};
}