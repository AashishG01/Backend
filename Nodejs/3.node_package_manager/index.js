const lodash = require('lodash');

const name = ['aashish', 'john', 'terry', 'alex', 'mia'];
const capitalize = lodash.map(name, lodash.capitalize);
console.log(capitalize);

