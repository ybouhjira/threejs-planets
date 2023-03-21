varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    vertexUV = uv; // uv is vertex coordinates in the texture
    vertexNormal = normalize(normalMatrix * normal); // normal is the normal vector of the vertex

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
}
