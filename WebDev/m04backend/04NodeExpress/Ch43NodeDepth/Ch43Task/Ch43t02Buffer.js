// Import the required modules
const { URL } = require('url');

// Function to convert string to Buffer and back to string
function bufferExample(inputString) {
    // Convert the input string to a Buffer
    const buffer = Buffer.from(inputString);

    // Convert the Buffer back to a string
    const convertedString = buffer.toString();

    return convertedString;
}

// Function to extract information from a URL
function extractURLInfo(inputURL) {
    // Create a new URL object using the input URL
    const urlObj = new URL(inputURL);

    // Extract and return the hostname, pathname, and search parameters
    const hostname = urlObj.hostname;
    const pathname = urlObj.pathname;
    const searchParams = urlObj.searchParams;

    return {
        hostname,
        pathname,
        searchParams: Array.from(searchParams.entries())
    };
}

// Test the functions with sample input data
const inputString = 'Hello, this is a sample string!';
const convertedString = bufferExample(inputString);
console.log('Original String:', inputString);
console.log('Converted String:', convertedString);

const inputURL = 'https://www.example.com/path/to/resource?param1=value1&param2=value2';
const urlInfo = extractURLInfo(inputURL);
console.log('URL Info:', urlInfo);