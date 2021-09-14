if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.')
}

AFRAME.registerShader('chromakey', {
  schema: {
    src: {type: 'map'},
    color: {default: {x: 0.1, y: 0.9, z: 0.2}, type: 'vec3', is: 'uniform'},
    transparent: {default: true, is: 'uniform'}
  },

  init: function (data) {
    var videoTexture = new THREE.VideoTexture(data.src)
    videoTexture.minFilter = THREE.LinearFilter
    this.material = new THREE.ShaderMaterial({
      uniforms: {
        color: {
          type: 'c',
          value: data.color
        },
        myTexture: {
          type: 't',
          value: videoTexture
        }
      },
      vertexShader: this.vertexShader,
      fragmentShader: this.fragmentShader
    })
  },

  update: function (data) {
    this.material.color = data.color
    this.material.src = data.src
    this.material.transparent = data.transparent
  },

  vertexShader: [
    'varying vec2 vUv;',
    'void main(void)',
    '{',
    'vUv = uv;',
    'vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );',
    'gl_Position = projectionMatrix * mvPosition;',
    '}'
  ].join('\n'),

  fragmentShader: [
    'uniform sampler2D myTexture;',
    'uniform vec3 color;',
    'varying vec2 vUv;',
    'void main(void)',
    '{',
    'vec3 tColor = texture2D( myTexture, vUv ).rgb;',
    'float a = (length(tColor - color) - 0.5) * 7.0;',
    'gl_FragColor = vec4(tColor, a);',
    '}'
  ].join('\n')
})
