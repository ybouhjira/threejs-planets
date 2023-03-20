import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "three";

export function makeCube() {
  const boxGeometry = new BoxGeometry(2, 2, 2);

  // Add cube
  const mesh = new Mesh(
    boxGeometry,
    new MeshStandardMaterial({ color: 0x00ff00 })
  );

  mesh.position.set(0, 1, 0);

  mesh.castShadow = true;
  return mesh;
}
