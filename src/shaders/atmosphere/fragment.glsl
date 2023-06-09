// from js code
uniform sampler2D globeTexture;

//from vertex shader
varying vec2 vertexUV;
varying vec3 vertexNormal;
varying mat3 rotationMatrix;

void main() {
    float intensity =  1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmosphereColor = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);

    gl_FragColor = vec4(atmosphereColor + texture2D(globeTexture, vertexUV).xyz, 1.0);

}
