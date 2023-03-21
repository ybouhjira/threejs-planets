import { AmbientLight, Scene, WebGL1Renderer } from "three";
import { makeCamera } from "./makeCamera";
import { makePlanets } from "./makePlanets";
import { GUI } from "dat.gui";
import * as TWEEN from "@tweenjs/tween.js";
import { lookAtPlanet } from "./lookAtPlanet";

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
  "Sun",
];

const gui = new GUI({ width: 300 });

namesOfSolarSystemPlanets.forEach((name) => {
  gui.add(
    {
      [name]: () => {
        const planet = scene.getObjectByName(name.toLowerCase());

        lookAtPlanet(planet, camera);
      },
    },
    name
  );
});

const camera = makeCamera();
const ambientLight = new AmbientLight(0xffffff, 0.5);
const planets = makePlanets();

scene.add(camera, ambientLight, ...planets);

function animate() {
  requestAnimationFrame(animate);

  TWEEN.update();
  planets.forEach((p) => (p.rotation.y += 0.001));
  renderer.render(scene, camera);
}

animate();

lookAtPlanet(scene.getObjectByName("mercury"), camera);
function onWindowResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();
}
onWindowResize();

window.addEventListener("resize", onWindowResize, false);
