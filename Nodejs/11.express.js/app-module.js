const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('home page');
})

app.post('/api/data', (req,res) =>{
    res.json({
        message: "data recieved",
        data : req.body,
    })
})

app.use((err, req, res, next)=>{
    console.log('error')
})