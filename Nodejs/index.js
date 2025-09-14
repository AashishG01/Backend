console.log("Hello, World!");
console.log("This is a Node.js application.");
console.log("Let's write some code!");

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Express server is working!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
console.log("Server setup complete.");