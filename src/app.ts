import { AmbientLight, Scene, WebGL1Renderer } from "three";
import { makeCube } from "./makeCube";
import { makeCamera } from "./makeCamera";
import { makeLight } from "./makeLight";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { makePlanets } from "./makePlanets";
import { makeDragControls } from "./makeDragControls";
import { GUI } from "dat.gui";
import { log } from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";

const scene = new Scene();
const renderer = new WebGL1Renderer({
  antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const namesOfSolarSystemPlanets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const gui = new GUI({ width: 300 });

namesOfSolarSystemPlanets.forEach((name) => {
  // panel.add({ [name]: true }, name).onChange((value) => {
  //   const planet = scene.getObjectByName(name.toLowerCase());
  //   planet.visible = value;
  // });

  // add a button that when click moves the camera to the planet
  gui.add(
    {
      [name]: () => {
        const planet = scene.getObjectByName(name.toLowerCase());

        const planetRadius = planet.geometry.parameters.radius;
        console.log(planetRadius);
        camera.position.set(
          planet.position.x + 10 + planetRadius,
          planet.position.y + 10 + planetRadius,
          planet.position.z + 10 + planetRadius
        );
        camera.lookAt(planet.position.x, planet.position.y, planet.position.z);
      },
    },
    name
  );
});

scene.add(gui);

const camera = makeCamera();
const ambientLight = new AmbientLight(0xffffff, 0.5);
const cube = makeCube();
const planets = makePlanets();
const light = makeLight();

scene.add(camera, cube, ambientLight, light, ...planets);

const controls = new OrbitControls(camera, renderer.domElement);
makeDragControls([cube, ...planets], controls, camera, renderer);

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
}

window.addEventListener("resize", onWindowResize, false);
