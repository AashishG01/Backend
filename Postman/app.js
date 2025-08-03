import express from "express";
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

app.post("/api/data", (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hello, ${name}` });
});

// Route with URL parameters
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is ${userId}`);
});

// Route with query parameters
app.get("/search", (req, res) => {
    const { q } = req.query;
    res.send(`Search results for: ${q}`);
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// 🚀 3. Using Postman to Test API
// ✅ A. Test a GET Request
// Open Postman

// Click "New" → "HTTP Request"

// Method: GET

// URL: http://localhost:3000/

// Click "Send"

// 🔍 You should see: Welcome to my API