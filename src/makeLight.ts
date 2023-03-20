import { PointLight, PointLightHelper } from "three";

export function makeLight() {
  const light = new PointLight(0x0000ff, 10, 10);
  light.position.set(2, 2, 2);
  return light;
}
