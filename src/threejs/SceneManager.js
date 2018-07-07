import * as THREE from 'three';
import * as Colors from './Colors';
import GeneralLights from './GeneralLights';
// import SceneSubject from './SceneSubject';
// import Icosahedron from './Icosahedron';
// import Dodecahedron from './Dodecahedron';
// import PentagonalTrapezohedron from './PentagonalTrapezohedron';
// import Octahedron from './Octahedron';
// import Cube from './Cube';
import Tetrahedron from './Tetrahedron';

export default (canvas) => {
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
        const sceneSubjects = [
            new GeneralLights(scene, 'white', Colors.LIGHT_ORANGE, Colors.YELLOW),
            // new Icosahedron(scene, 0, Colors.PINK, 0.97),
            // new Dodecahedron(scene, 0, Colors.ORANGE, 0.97),
            // new PentagonalTrapezohedron(scene, 15, Colors.PINK, 0.97),
            // new Octahedron(scene, 15, Colors.PINK, 0.97)
            // new Cube(scene, 15, Colors.PINK, 0.97)
            new Tetrahedron(scene, 15, Colors.PINK, 0.97)
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