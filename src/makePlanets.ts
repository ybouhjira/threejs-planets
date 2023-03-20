import {
  Mesh,
  MeshStandardMaterial,
  SphereGeometry,
  TextureLoader,
} from "three";

export function makePlanets() {
  const radii = {
    mercury: 2.4397,
    venus: 6.0518,
    earth: 6.3781,
    mars: 3.3972,
    jupiter: 69.911,
    saturn: 58.232,
    uranus: 25.362,
    neptune: 24.622,
    pluto: 1.188,
  };
  const planets = {
    earth: {
      radius: radii.earth,
      texture: new URL(
        "textures/2k_earth_daymap.jpg",
        import.meta.url
      ).toString(),
    },
    mars: {
      radius: radii.mars,
      texture: new URL("./textures/2k_mars.jpg", import.meta.url).toString(),
    },
    neptune: {
      radius: radii.neptune,
      texture: new URL("./textures/2k_neptune.jpg", import.meta.url).toString(),
    },
    jupiter: {
      // radius: 69.9,
      radius: radii.jupiter,
      texture: new URL("./textures/2k_jupiter.jpg", import.meta.url).toString(),
    },
    saturn: {
      radius: radii.saturn,
      texture: new URL("./textures/2k_saturn.jpg", import.meta.url).toString(),
    },
    uranus: {
      radius: radii.uranus,
      texture: new URL("./textures/2k_uranus.jpg", import.meta.url).toString(),
    },
    venus: {
      radius: radii.venus,
      texture: new URL("./textures/2k_venus_atmosphere.jpg", import.meta.url),
    },
    mercury: {
      radius: radii.mercury,
      texture: new URL("./textures/2k_mercury.jpg", import.meta.url).toString(),
    },
  };

  let position = 0;
  return Object.entries(planets)
    .sort(([{ radius: r1 }], [{ radius: r2 }]) => r1 - r2)
    .map(([planet, { radius, texture }], i) => {
      const mesh = new Mesh(
        new SphereGeometry(radius, 32, 32),
        new MeshStandardMaterial({
          map: new TextureLoader().load(texture),
        })
      );
      mesh.name = planet;
      mesh.position.set(radius + position, radius, i * 10);
      position += radius * 2;
      mesh.castShadow = true;
      return mesh;
    });
}
