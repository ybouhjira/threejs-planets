import { PerspectiveCamera } from "three";

export function makeCamera() {
  const camera = new PerspectiveCamera(
    100,
    window.innerHeight / window.innerWidth,
    0.1,
    2000
  );

  camera.position.set(0, 10, -10);
  camera.lookAt(0, 0, 0);

  return camera;
}
