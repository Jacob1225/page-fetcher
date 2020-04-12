let args = process.argv.slice(2);
const fs = require('fs');

const request = require('request');

let url = args[0];
let path = args[1];

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(path, body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved to ${path}`);
  });

});
