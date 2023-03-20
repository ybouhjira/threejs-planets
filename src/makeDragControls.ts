import { Object3D, PerspectiveCamera, WebGLRenderer } from "three";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function makeDragControls(
  objects: Object3D[],
  orbitControls: OrbitControls,
  camera: PerspectiveCamera,
  renderer: WebGLRenderer
) {
  const dragControls = new DragControls(objects, camera, renderer.domElement);

  dragControls.addEventListener("dragstart", function () {
    orbitControls.enabled = false;
  });
  dragControls.addEventListener("dragend", function () {
    orbitControls.enabled = true;
  });
}
