import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

console.log("Welcome to the secrets project!");
// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

//var userIsAuthorised = false; // Variable to track if the user is authorised

// function passwordCheck(req, res, next) {
//   const password = req.body["password"]; // Access the password field from the form submission
//   if (password === "Ilovejs") { // Check if the password is correct
//     userIsAuthorised = true; // If correct, proceed to the next middleware or route handler
//   } else {
//     next(); // If incorrect, call next() to skip the middleware
//   }
// }

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // Send a response when the root URL is accessed
});

// Apply passwordCheck ONLY to this route
app.post("/check", (req, res) => {
  const password = req.body.password;

  if (password === "Ilovejs") {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});