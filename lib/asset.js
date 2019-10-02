const JSONAsset = require('parcel-bundler/src/assets/JSONAsset');
const RawAsset = require('parcel-bundler/src/assets/RawAsset');
const md5 = require('parcel-bundler/src/utils/md5');
const urlJoin = require('parcel-bundler/src/utils/urlJoin');

/**
 * RawAsset has almost everything we need, except tow things to notice:
 *  1. the `type` property should be specified to `json` in order to output the right file extension.
 *  2. `generate` function inside RawAsset tries to handle mapped file type to the builtin Asset, 
 *     just remove that, and then a correct url will be generated.
 */
class JSONExtendedAsset extends JSONAsset {
    
    generate() {
        // Hacky hacky hacky
        // Hoal is to have no default export in case the JSON object has a 'url' attribute
        // For some reason it looks like Parcel only executes the first statement, so the
        // usual `module.exports = {}; exports.url = ...; exports.data = ...` does not work
        // So... this
        const code = super.generate()
          .replace(/^module\.exports\s*=\s*(\S[^]*);$/,
            `module.exports={url: ${
              JSON.stringify(urlJoin(
                  this.options.publicURL,
                  md5(this.relativeName) + '.' + 'json'
              ))
            }, data: $1};`
          );
        return [{type: 'js', value: code}];
    }

}

module.exports = JSONExtendedAsset;
