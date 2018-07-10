import * as THREE from 'three';
import GeneralLights from './GeneralLights';

export default (canvas, shape, color, ambientColor, strongLightColor, weakLightColor, color2=null) => {
    const clock = new THREE.Clock();
    const origin = new THREE.Vector3(0,0,0);

    const screenDimensions = {width: canvas.width, height: canvas.height};

    const mousePosition = {x: 0, y: 0};

    const scene = new THREE.Scene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneSubjects = createSceneSubjects(scene);

    function buildRender({width, height}) {
        const renderer = new THREE.WebGLRenderer({canvas, alpha: true, antialias: true});
        const devicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(devicePixelRatio);
        renderer.setSize(width, height);
        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        return renderer;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fieldOfView = 60;
        const nearPlane = 4;
        const farPlane = 100;
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.position.z = 40;
        return camera;
    }

    function createSceneSubjects(scene) {
        let newShape;
        if(color2) {
            newShape = shape(scene, 15, color, color2, 0.9);
        }
        else {
            newShape = shape(scene, 15, color, 0.93)
        }

        const sceneSubjects = [
            GeneralLights(scene, ambientColor, strongLightColor, weakLightColor),
            newShape
        ];
        return sceneSubjects;
    }

    function update() {
        const elapsedTime = clock.getElapsedTime();
        for(let i = 0; i < sceneSubjects.length; i++) {
            sceneSubjects[i].update(elapsedTime);
        }
        updateCameraPositionRelativeToMouse();
        renderer.render(scene, camera);
    }

    function updateCameraPositionRelativeToMouse() {
        camera.position.x += (  (mousePosition.x * 0.01) - camera.position.x ) * 0.01;
        camera.position.y += ( -(mousePosition.y * 0.01) - camera.position.y ) * 0.01;
        camera.lookAt(origin);
    }

    function onWindowResize() {
        const { width, height } = canvas;

        screenDimensions.width = width;
        screenDimensions.height = height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    }

    function onMouseMove(x, y) {
        mousePosition.x = x;
        mousePosition.y = y;
    }

    return {update, onWindowResize, onMouseMove};
}