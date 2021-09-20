# isomorphic-undici

Isomorphic exports of `fetch`, providing `window.fetch`  in the browser and `undici.fetch` in node.js.

```
npm install isomorphic-undici
```

## Usage


``` 
import fetch from 'isomorphic-undici';
```

## Why

`undici fetch` reduces request processing time by ~ 50-60%

## Requirements
 `Node 16+`

To use with webpack, you need to add to your webpack config for node (`target:node`):
- webpack `>=v5.53` or add the external dependency `"stream/web"`
- experiments `asyncWebAssembly: true` 
- add [`webassembly-loader`](https://www.npmjs.com/package/webassembly-loader) (npm i webassembly-loader)



### example
```
  externals: {
    'stream/web': 'commonjs stream/web', // for webpack lowest than v5.53
  },
  experiments: {
    asyncWebAssembly: true,
  },
  rules: [
    {
      test: /\.wasm$/,
      type: 'javascript/auto',
      use: [
        {
          loader: 'webassembly-loader',
          options: {
            export: 'buffer', // only buffer
          },
        },
      ],
    },
  ],
```
## License

MIT
