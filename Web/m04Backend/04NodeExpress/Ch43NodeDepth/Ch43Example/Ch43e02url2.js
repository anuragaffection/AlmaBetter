const url = require('url');
const fromUrl = 'https://www.example.com/path/to/file';
const toUrl = '../other/file';
const resolvedUrl = url.resolve(fromUrl, toUrl);
console.log(resolvedUrl);