import * as THREE from 'three'

export default (scene, ambientColor, strongLightColor, weakLightColor) => {

    const lightIn = new THREE.PointLight("#4CAF50", 10);
    const lightOut = new THREE.PointLight("#2196F3", 10);

    const ambient =  new THREE.AmbientLight(ambientColor, 1)
    const strongLight = new THREE.PointLight(strongLightColor, 1);
    const weakLight = new THREE.PointLight(weakLightColor, 1);
    strongLight.position.set(-20,-30,40);
    weakLight.position.set(20, 30, 40);
    scene.add(ambient);
    scene.add(strongLight);
    scene.add(weakLight);

    const rad = 80;

    function update(time) {
        // const x = rad * Math.sin(time*0.2)
        // lightOut.position.x = x;
    }

    return {update};
}