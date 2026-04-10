const fs = require('fs');

const path = require('path');

const datafolder = path.join(__dirname, "data");

if(!fs.existsSync(datafolder)){
    fs.mkdirSync(datafolder);
    console.log('data folder created');
};

const filepath = path.join(datafolder, 'example.txt')

// sync way of creating the file 
fs.writeFileSync(filepath, 'hello from nodejs');
console.log("file created succesfully");

// reading content 
const readContentFromFile = fs.readFileSync(filepath, 'utf-8');
console.log(readContentFromFile);

fs.appendFileSync(filepath, '\n this is new line added to this line');

//async way of creating file 
const asyncfilepath = path.join(datafolder, 'async-example.txt')
fs.writeFile(asyncfilepath, 'hello async node js', (err) => {
    if(err) throw err;
    console.log('Async file is created successfully');

    fs.readFile(asyncfilepath, 'utf-8', (err, data) => {
        if(err) throw err;
        console.log("async file content:", data);

        fs.appendFile(asyncfilepath, "\n this is another line", (err, data)=> {
            if(err) throw err;
            console.log('New Line added to async file');

            fs.readFile(asyncfilepath, 'utf-8', (err, updateddata) => {
                if(err) throw err;
                console.log("updated content:", updateddata);
            });
        });
    });
});