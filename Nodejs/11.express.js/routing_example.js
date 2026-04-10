const express = require('express');
const app = express()

//root route
app.get('/', (req, res)=>{
    res.send("welcome to home page")
});

const port = 3000;
app.listen(port, () => {
    console.log('server is now running at port ${port}');
})