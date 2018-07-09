import * as THREE from 'three'

export default (scene, ambientColor, strongLightColor, weakLightColor) => {
    const ambient =  new THREE.AmbientLight(ambientColor, 1)
    const strongLight = new THREE.PointLight(strongLightColor, 1);
    const weakLight = new THREE.PointLight(weakLightColor, 1);
    strongLight.position.set(-20,-30,40);
    weakLight.position.set(20, 30, 40);
    scene.add(ambient);
    scene.add(strongLight);
    scene.add(weakLight);

    function update(time) {}

    return {update};
}