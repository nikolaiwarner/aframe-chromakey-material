if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.')
}

AFRAME.registerShader('chromakey', {
  schema: {
    src: {type: 'map'},
    color: {default: {x: 0.1, y: 0.9, z: 0.2}, type: 'vec3', is: 'uniform'},
    transparent: {default: true}
  },

  vertexShader: [
    'varying mediump vec2 vUv;',
    'void main(void)',
    '{',
    'vUv = uv;',
    'mediump vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );',
    'gl_Position = projectionMatrix * mvPosition;',
    '}'
  ].join('\n'),

  fragmentShader: [
    'uniform mediump sampler2D texture;',
    'uniform mediump vec3 color;',
    'varying mediump vec2 vUv;',
    'void main(void)',
    '{',
    'mediump vec3 tColor = texture2D( texture, vUv ).rgb;',
    'mediump float a = (length(tColor - color) - 0.5) * 7.0;',
    'gl_FragColor = vec4(tColor, a);',
    '}'
  ].join('\n')
})
