import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;


// Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // Send a response when the root URL is accessed
});


app.post("/submit", (req, res) => {
  const name = req.body.name; // Access the name field from the form submission
    res.send(`Hello, ${name}! Your form has been submitted.`); // Send a response with the submitted name
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});