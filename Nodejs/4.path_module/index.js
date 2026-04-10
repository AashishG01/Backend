const path = require('path');

console.log("directory name:", path.dirname(__filename));

console.log('file name:', path.basename(__filename));

console.log('file extension', path.extname(__filename));

const joinpath = path.join("/user", "document", "node", "projects");

console.log("joined path", joinpath);

const resolvepath = path.resolve('user','document','node','project');
console.log("resolved path:", resolvepath);

const normalize = path.normalize()
