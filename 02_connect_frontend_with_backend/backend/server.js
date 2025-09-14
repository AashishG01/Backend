import express from 'express'; // this is module js

const app = express();



app.get('/', (req, res) => {
    res.send('server is ready');
});

// Sample jokes data
const jokes = [
    { id: 1, joke: "Why don't scientists trust atoms? Because they make up everything!" },
    { id: 2, joke: "Why did the math book look sad? Because it had too many problems." },
    { id: 3, joke: "Why don’t programmers like nature? Too many bugs." },
    { id: 4, joke: "Why did the computer go to the doctor? Because it caught a virus!" },
    { id: 5, joke: "Why do cows wear bells? Because their horns don’t work." }
];


// Jokes route
// use standard approch /api/jokes
app.get('/api/jokes', (req, res) => {
    res.json(jokes);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});