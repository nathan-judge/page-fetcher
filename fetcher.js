const request = require('request');
const fs = require('fs');
const path = require('path/posix');

const path = process.argv[3];
const url = process.argv[2];


const fetcher = function (url, path) {
    request(url, (error, file) => {
        if (error) {
            console.log('Failed to download resource: ', error);
            return;
        }
        fs.writeFile(path, file, (error) => {
            if (error) {
                console.log('Failed to write to path: ', path);
            } else {
                console.log(`Downloaded and saved ${file.length} bytes to ${path}`);
            }
        });
    });
    fetcher(url, path);
}