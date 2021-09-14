## aframe-chromakey-material

[![Version](http://img.shields.io/npm/v/aframe-chromakey-material.svg?style=flat-square)](https://npmjs.org/package/aframe-chromakey-material)
[![License](http://img.shields.io/npm/l/aframe-chromakey-material.svg?style=flat-square)](https://npmjs.org/package/aframe-chromakey-material)

A chromakey material for green screen effects in [A-Frame](https://aframe.io). Provided a color, this material will remove
that color from the video or image source. Perfect for blockbuster hollywood effects in VR!


![chasevr](https://cloud.githubusercontent.com/assets/40796/24076948/2158fba4-0c14-11e7-8bee-72507f4339fa.jpg)


### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| color    | Color to key from source. This is a vec3 of rgb values. Default is greenish. | 0.1 0.9 0.2 |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
  <script src="https://unpkg.com/aframe-chromakey-material/dist/aframe-chromakey-material.min.js"></script>
```

See [this example](example/index.html) for usage.

#### npm

Install via npm/yarn:

```bash
npm install aframe-chromakey-material
```

Then require and use.

```js
import 'aframe';
import 'aframe-chromakey-material';
```

#### Credits

A big thanks to the prior research on chromakey shaders in WebGL and Three.js by:
https://github.com/makc/makc.github.io/tree/master/three.js/chromakey
https://github.com/hawksley/Threex.chromakey
