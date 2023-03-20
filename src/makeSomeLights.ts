import { RectAreaLight } from "three";

export function makeSomeLights() {
  const rectLight1 = new RectAreaLight(0xff0000, 5, 4, 10);
  rectLight1.position.set(-5, 5, 5);
  const rectLight2 = new RectAreaLight(0x00ff00, 5, 4, 10);
  rectLight2.position.set(0, 5, 5);
  const rectLight3 = new RectAreaLight(0x0000ff, 5, 4, 10);
  rectLight3.position.set(5, 5, 5);
  return { rectLight1, rectLight2, rectLight3 };
}
