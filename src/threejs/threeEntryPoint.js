// `threeEntryPoint` is a function that takes an element as parameter,
// this element will be the container of the canvas.
// This function is responsible for:
//
// 1. Creating the canvas
// 2. Binding events
// 3. Creating Three.js objects
// 4. Starting the render loop

import SceneManager from './SceneManager';

export default (containerElement, shape, color, ambientColor, strongLightColor, weakLightColor, color2=null) => {
    const canvas = createCanvas(document, containerElement);
    const sceneManager = SceneManager(canvas, shape, color, ambientColor, strongLightColor, weakLightColor, color2);

    bindEventListeners();
    render();

    function createCanvas(document, containerElement) {
        const canvas = document.createElement('canvas');
        containerElement.appendChild(canvas);
        return canvas;
    }

    function bindEventListeners() {
        window.onresize = resizeCanvas;
        resizeCanvas();
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth/7;
        canvas.height = window.innerWidth/7 * .8;
        sceneManager.onWindowResize();
    }

    function render(time) {
        requestAnimationFrame(render);
        sceneManager.update();
    }
}