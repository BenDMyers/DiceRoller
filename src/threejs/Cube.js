import * as THREE from 'three';

export default (scene, length, materialColor, opacity) => {
    const group = new THREE.Group();

    const geometry = new THREE.BoxGeometry(length, length, length);
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