# parcel-plugin-json-url-or-data-loader
![DUB](https://img.shields.io/dub/l/vibe-d.svg)

## What
Expands the functionality of [parcel-plugin-json-url-loader](https://github.com/shunia/parcel-plugin-url-loader):
```js
// imports JSON object
import { data as foo } from 'path/to/file.json';

// imports file URL
import { url as bar } from 'path/to/file.json';
```

(The remainder of this README is unmodified except for codeblocks)

## Why
Lots of users inculding me are suffered from the build-in feature of `parcel` which bundles `json` file as strings into the final bundler by default [parcel-bundler#501](https://github.com/parcel-bundler/parcel/issues/501). When people are looking for the official solutions, `parcel` is still waiting for the solution from react community [devongovett@parcel-bundler#501](https://github.com/parcel-bundler/parcel/issues/501#issuecomment-357883317). As a matter of fact, it's something easy to hanle with `parcel`'s plugin system. So I made this.

## Installation
```
yarn add parcel-plugin-json-extended --dev
  or
npm install parcel-plugin-json-extended --save-dev
```

## Usage
There is no options for you to think of. Just install it and checkout the output:
```
const asset = require('path/to/json/file.json');
console.log(asset.url); // /file.3a855491.json
console.log(asset.data); // { json object... }
```

## Contribution
There are no tests yet, no linters, no production grade garrentee, and works simply as possible. Any feature requests or bugfixes are welcome.
