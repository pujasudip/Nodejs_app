console.log('hello world!');

const fs = require('fs');
const os = require('os');
const myFile = require('./input.txt');

fs.appendFile('greetings.txt', 'hello how are you?\n', (error) => {
	if(error) {
		console.log('error in file operation:', error);
	} else {
		console.log('successfully appended file');
	}

	
});

const osInfo = os.type();

console.log('os:', myFile);