const url = require('url');
const urlString = 'https://grow.almabetter.com/web-dev/learn/full-stack-web-development/FOUNDATION_TRACK/bootcamp-wd-m4-c3-l3/Concept-Notion';
const parsedUrl = url.parse(urlString);
console.log(parsedUrl)
console.log("protocol = ", parsedUrl.protocol); // 'https:'
console.log("host = ", parsedUrl.host); // 'www.example.com'
console.log("hostname = ", parsedUrl.hostname); // 'www.example.com'
console.log("pathname = ", parsedUrl.pathname); // '/path/to/page'
console.log("query = ", parsedUrl.query); // 'param1=value1&param2=value2'
console.log("hash = ", parsedUrl.hash); // '#section1'

// what is alternative of parse 
// 