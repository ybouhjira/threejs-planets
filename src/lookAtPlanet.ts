import { Object3D, PerspectiveCamera, Event, Vector3 } from "three";
import * as TWEEN from "@tweenjs/tween.js";

export function lookAtPlanet(
  planet: Object3D<Event>,
  camera: PerspectiveCamera
) {
  const planetRadius = planet.geometry.parameters.radius;

  new TWEEN.Tween(camera.position)

    .to(
      new Vector3().addVectors(
        planet.position,
        new Vector3(0, planetRadius * 3, planetRadius * 3)
      ),
      1000
    )
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate((object) => {
      camera.position.set(object.x, object.y, object.z);
      camera.lookAt(planet.position);
    })
    .start();
}
