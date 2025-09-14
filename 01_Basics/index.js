const express = require('express') // Import the express library 
const app = express() // Create an instance of an Express application
const port = 3000 // Define the port number the server will listen on and the total number of ports are 65535
    //portenv = process.env.PORT; // Use the PORT environment variable if available, otherwise default to 3000

// Define a route for the root URL 
// When a GET request is made to the root URL, send "Hello World!" as the response 
app.get('/', (req, res) => {
    res.send('Hello World!')
})


// Define a route for the /twitter URL
// When a GET request is made to /twitter, send "About Page" as the response
app.get('/twitter', (req, res) => {
    res.send('About Page')
})

// Define routes for /login and /signup URLs
// When a GET request is made to /login, send "Login page" as the response
app.get('/login', (req, res) => {
    res.send('<h1>Login page</h1>')
})

// Define a route for the /signup URL
// When a GET request is made to /signup, send "Signup page" as the response
app.get('/signup', (req, res) => {
    res.send('<h1>Signup page</h1>')
})

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})

// To run the server, use the command: node index.js or npm run start
// Open a web browser and navigate to http://localhost:3000 to see the "Hello World!" message


// so what is happening here is that we are creating a simple web server using the express library
// we define some routes that respond to GET requests with different messages
// finally, we start the server and listen on port 3000 for incoming requests
// when you navigate to the defined routes in a web browser, you will see the corresponding messages displayed


// Note: Make sure to install the express library using npm before running this code
// You can do this by running the command: npm install express


// what is node js
// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
// It allows you to run JavaScript code outside of a web browser, enabling server-side development
// Node.js is commonly used for building web servers, APIs, and real-time applications
// It has a vast ecosystem of libraries and frameworks available through npm (Node Package Manager)

// what is express js
// Express.js is a web application framework for Node.js
// It provides a simple and flexible way to build web applications and APIs
// Express.js simplifies the process of handling HTTP requests, routing, and middleware integration
// It is widely used for building server-side applications and RESTful APIs due to its minimalistic and unopinionated nature


// environment variables
// Environment variables are a way to store configuration settings outside of your code
// They allow you to define values that can be accessed by your application at runtime
// Environment variables are commonly used to store sensitive information such as API keys, database credentials, and other configuration settings
// In Node.js, you can access environment variables using process.env.VARIABLE_NAME
// You can set environment variables in your operating system or use a package like dotenv to load them from a .env file