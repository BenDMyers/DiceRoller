import * as THREE from 'three';
import {DiceManager, DiceD10} from 'threejs-dice';
import CANNON from 'cannon';

window.THREE = THREE;
window.CANNON = CANNON;

export default (scene, radius, materialColor1, materialColor2, opacity) => {
    const group = new THREE.Group();

    // console.log('threejs-dice', DiceD10.getGeometry);
    const world = new CANNON.World();
    DiceManager.setWorld(world);

    const d10Model1 = new DiceD10({size: radius});
    d10Model1.chamfer = 1;
    const geometry1 = d10Model1.getGeometry();
    const material1 = new THREE.MeshLambertMaterial({
        color: materialColor1,
        side: THREE.DoubleSide,
        opacity,
        transparent: true
    });
    const mesh1 = new THREE.Mesh(geometry1, material1);
    const wireframe1 = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry1),
        new THREE.LineBasicMaterial()
    );

    const d10Model2 = new DiceD10({size: radius/3});
    d10Model2.chamfer = 1;
    const geometry2 = d10Model2.getGeometry();
    const material2 = new THREE.MeshLambertMaterial({
        color: materialColor2,
        side: THREE.DoubleSide,
        opacity,
        transparent: true
    });
    const mesh2 = new THREE.Mesh(geometry2, material2);
    const wireframe2 = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry2),
        new THREE.LineBasicMaterial()
    );

    group.add(mesh1);
    group.add(wireframe1);

    mesh2.position.set(-radius*.6, radius*.6, -radius*.6);
    wireframe2.position.set(-radius*.6, radius*.6, -radius*.6);

    group.add(mesh2);
    group.add(wireframe2);

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