import { Mesh, ShaderMaterial, SphereGeometry, TextureLoader } from "three";

import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

export function makePlanets() {
  const radii = {
    sun: 24,
    mercury: 2.4397,
    venus: 6.0518,
    earth: 6.3781,
    mars: 3.3972,
    jupiter: 69.911,
    saturn: 58.232,
    uranus: 25.362,
    neptune: 24.622,
  };

  const planets = {
    sun: {
      radius: radii.sun,
      texture: new URL("./textures/2k_sun.jpg", import.meta.url),
    },
    mercury: {
      radius: radii.mercury,
      texture: new URL("./textures/2k_mercury.jpg", import.meta.url),
    },
    venus: {
      radius: radii.venus,
      texture: new URL("./textures/2k_venus_atmosphere.jpg", import.meta.url),
    },
    earth: {
      radius: radii.earth,
      texture: new URL("textures/2k_earth_daymap.jpg", import.meta.url),
    },
    mars: {
      radius: radii.mars,
      texture: new URL("./textures/2k_mars.jpg", import.meta.url),
    },
    jupiter: {
      radius: radii.jupiter,
      texture: new URL("./textures/2k_jupiter.jpg", import.meta.url),
    },
    saturn: {
      radius: radii.saturn,
      texture: new URL("./textures/2k_saturn.jpg", import.meta.url),
    },

    uranus: {
      radius: radii.uranus,
      texture: new URL("./textures/2k_uranus.jpg", import.meta.url),
    },
    neptune: {
      radius: radii.neptune,
      texture: new URL("./textures/2k_neptune.jpg", import.meta.url),
    },
  };

  let position = 0;
  return Object.entries(planets).map(([planet, { radius, texture }]) => {
    const mesh = new Mesh(
      new SphereGeometry(radius, 64, 64),
      new ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: { value: new TextureLoader().load(texture) },
        },
      })
    );

    console.log(mesh.geometry.attributes.normal);
    mesh.name = planet;
    mesh.position.set(position, 0, 0);
    position += radius * 2 + 100;
    mesh.castShadow = true;
    return mesh;
  });
}
