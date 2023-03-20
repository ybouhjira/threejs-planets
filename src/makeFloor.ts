import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";

export function makeFloor() {
  const geoFloor = new BoxGeometry(2000, 0.1, 2000);
  const matStdFloor = new MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.1,
    metalness: 0,
  });
  const mshStdFloor = new Mesh(geoFloor, matStdFloor);
  return mshStdFloor;
}
