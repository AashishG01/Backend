import express from 'express';

const app = express();
// This is the main entry point for the Express.js application
app.get("/", (req, res) => { // Handle GET requests to the root URL
  // Send a response when the root URL is accessed --> that's why req and res are used
  res.send("Express server is working! this is aashish gupta  ");   
});

app.get("/about", (req, res) => { // Handle GET requests to the /about URL
  res.send("This is the about page!"); // Send a response for the about page  
});

app.get("/contact", (req, res) => { // Handle GET requests to the /contact URL
  res.send("This is the contact page!"); // Send a response for the contact page
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});