import { AmbientLight, Scene, WebGL1Renderer } from "three";
import { makeCube } from "./makeCube";
import { makeCamera } from "./makeCamera";
import { makeLight } from "./makeLight";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { makePlanets } from "./makePlanets";
import { makeDragControls } from "./makeDragControls";
import { GUI } from "dat.gui";
import * as TWEEN from "@tweenjs/tween.js";

const scene = new Scene();
const renderer = new WebGL1Renderer({
  antialias: true
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
  "Neptune"
];

const gui = new GUI({ width: 300 });

namesOfSolarSystemPlanets.forEach((name) => {
  gui.add(
    {
      [name]: () => {
        const planet = scene.getObjectByName(name.toLowerCase());

        const planetRadius = planet.geometry.parameters.radius;

        new TWEEN.Tween(camera.position)
          .to({
            x: planet.position.x,
          }, 2000)
          .onUpdate((object) => {
            camera.position.x = object.x
          })
          .start();
      }
    },
    name
  );
});


const camera = makeCamera();
const ambientLight = new AmbientLight(0xffffff, 0.5);
const cube = makeCube();
const planets = makePlanets();
const light = makeLight();

scene.add(camera, cube, ambientLight, light, ...planets);

//const controls = new OrbitControls(camera, renderer.domElement);
//makeDragControls([cube, ...planets], controls, camera, renderer);

function animate() {
  requestAnimationFrame(animate);

  TWEEN.update()
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
