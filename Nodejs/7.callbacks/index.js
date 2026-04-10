// callbacks are functions passed as arguments to other function 

const fs = require('fs');
function person(name, callbackFn){
    console.log(`Hello ${name}`);
    callbackFn();
}


function address(){
    console.log('India')
}

person('aashish', address);


fs.readFile('input.txt', 'utf-8', (err, data) => {
    if(err){
        console.error('Error reading the file', err)
        return 
    }

    console.log(data);
});
