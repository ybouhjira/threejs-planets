import { PerspectiveCamera } from "three";

export function makeCamera() {
  const camera = new PerspectiveCamera(
    45,
    window.innerHeight / window.innerWidth,
    1,
    1000
  );

  camera.position.set(10, 0, -50);
  camera.lookAt(10, 0, 0);

  return camera;
}
