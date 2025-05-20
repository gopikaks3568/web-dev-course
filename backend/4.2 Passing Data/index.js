import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs"); // Use res.render
});

app.post("/submit", (req, res) => {
  const nameLetters = req.body.fName.length + req.body.lName.length; // Fix property names and use const
  res.render("index.ejs", { // Render index.ejs and pass the data
    noOfLetters: nameLetters 
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
