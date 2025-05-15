import express from "express";

const app = express();

const port = 3000;

app.get("/",(req,res) =>{
    res.send("<h2>hello world!<h2>");
});

app.get("/contact",(req,res) =>{
    res.send("<h2>contact us</h2>");
});

app.get("/about",(req,res) =>{
    res.send("<h2>About Page </h2>");
});

app.listen(port, ()=>{
    console.log(`The server is running  on ${port}`);

});
