## aframe-chromakey-material

[![Version](http://img.shields.io/npm/v/aframe-chromakey-material.svg?style=flat-square)](https://npmjs.org/package/aframe-chromakey-material)
[![License](http://img.shields.io/npm/l/aframe-chromakey-material.svg?style=flat-square)](https://npmjs.org/package/aframe-chromakey-material)

A ahromakey material for green screen effects in [A-Frame](https://aframe.io). Provided a color, this material will remove
that color from the video or image source. Perfect for blockbuster hollywood effects in VR!


A big thanks to the prior research on chromakey shaders in WebGL and Three.js by:
https://github.com/makc/makc.github.io/tree/master/three.js/chromakey
https://github.com/hawksley/Threex.chromakey


### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| color    | Color to key out. This is a vec3 of rgb values | {x: 0.1, y: 0.9, z: 0.2} |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.4.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-chromakey-material/dist/aframe-chromakey-material.min.js"></script>
</head>

<body>
  <a-scene>
    <a-assets>
        <video id="greenscreenvideo" src="greenscreenvideo.mp4" loop autoplay muted />
      </a-assets>
    <a-entity geometry="primitive: box" material="shader: chromakey; src: #greenscreenvideo; color: {x: 0.1, y: 0.9, z: 0.2}"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-chromakey-material
```

Then require and use.

```js
require('aframe');
require('aframe-chromakey-material');
```
