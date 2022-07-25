const fs = require('fs');
const path = require('path');

// get current directory
const currentDir = path.join(__dirname, 'files');

// Making a single file
// fs.writeFileSync(path.join(currentDir, 'test.txt'), 'Hello World');


// Making multiple files
// for (i=0; i<5; i++) {
//     fs.appendFileSync(path.join(currentDir, `test${i}.txt`), `Hello World${i}`);
// }


const numberOfFiles = fs.readdirSync(currentDir).length;
console.log(numberOfFiles);




// Delete a file
// fs.unlinkSync(currentDir + "/test0.txt");