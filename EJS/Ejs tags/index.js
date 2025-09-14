import e from "express";
import express from "express";

const app = express();
const PORT = 3000;


app.set("view engine", "ejs"); // Set EJS as the templating engine

app.get("/", (req, res) => {
    console.log(">>> / route hit"); 
  const today = new Date();
  const day = today.getDay(); // Get the current day of the week (0-6, where 0 is Sunday)
  console.log("Day value:", day); // This should now print

  let dayType;
  let advice;

  if (day === 0 || day === 6) {
    dayType = "the weekend";
    advice = "Take it easy!";
  } else {
    dayType = "a weekday";
    advice = "Time to work hard!";
  }

  res.render("index", {
    dayType: dayType,
    advice: advice,
  });
});


app.listen(PORT, () => {  
    console.log(`Server running on http://localhost:${PORT}`);
});