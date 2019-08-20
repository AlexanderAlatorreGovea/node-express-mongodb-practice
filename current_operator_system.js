const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`Total Memory is ${totalMemory}`);
console.log(`free Memory is ${freeMemory}`);