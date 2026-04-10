//module.exports  -> 
// require -> 
// module wrapper 


const firstModule = require('./first_module')
console.log(firstModule.add(10,20));

try{
    console.log('trying to divide by zero');
    let result = firstModule.divide(100,10);
    console.log(result);
}catch(error){
    console.log('caught an error', error.message);
}

// module wrapper 
// (
//     function(exports, require, module.__filename, __dirname){
//         // your module code goes here
//     }
// )


